---
title: '디버그 기록: 오래된 사진이 나오는 문제'
date: '2026-08-01'
publish: public
---





## 문제가 무엇이었나

대순 형을 통해 안동선 에디터님의 포트폴리오 사이트 `andonza.works` 를 제작하고 관리해오고 있다. 문제가 생겼다는 말을 듣고 대순 형으로부터 전해받은 메일을 확인했다. '사진을 업로드 하면 예전 사진이 나온다' 고 쓰여있었다.

처음에는 무슨 말인지 몰랐는데, 다른 포스트에 있는 사진이 최근의 포스트에 올라가 있는 것을 보고 알았다. 업로드 된 일련의 사진을 보아하니 `1.jpg`, `2.jpg`, ... 이렇게 잘 업로드 되었는데 마지막에 `5.jpg` 가 이전 포스트에 있는 것으로 나오는 것을 보고 '이름이 겹쳤구나' 라는 짐작이 갔다.



기존의 구현에서 함수의 실행 순서와 데이터의 표현은 아래와 같았다.

```ts
-> submitArticle
  -> mapContentsTags
    -> mapImageTags
			-> matchImageTags : contents 내부의 모든 이미지 태그를 검색해 배열(`tagStrings`)로 리턴
      -> mapImageTagToPath
        -> `tagStringsToPaths` : `tagStrings` 를 **모두 순회** 하여 중복확인 및 업로드하고 imagePaths 배열 리턴
        -> replaceImageTags : contents의 이미지 태그들을 imagePaths 기반으로 교체
```



로직을 확인해보니 여러가지 문제의 가능성들이 있었는데, 직접적인 연관이 있던 것은 `tagStringsToPaths` 함수 내부의 로직이다. 

```ts
function tagStringsToPaths (
	mediaContents: Array<{
    name: string;
    file: File;
  }>,
  tagStrings: Array<string>
) {
 // ...
  const registeredImage = await readImage(
    imageName
  );

  const hasImageAlready = Boolean(
    registeredImage?.data
  );

  if (hasImageAlready) {
    return {
      name: imageName,
      path: registeredImage.data.path as string,
      width: dom?.getAttribute("width") ?? "",
      style: dom?.getAttribute("style") ?? "",
      align: dom?.getAttribute("align") ?? "",
    };
  }
  // ... 
}
```

일단 tagStringsToPaths라는 이름부터가 잘못되었다. tagStrings는 무엇이고, paths는 무엇이란 말인가. 배경지식이 없는 이상 이해하기가 쉽지 않다.

여기에서 말하는 tagStrings는 본문에 존재하는 모든 이미지 태그들의 리스트이다. Paths는 'image path' 라는 임의의 객체로서, tagStringsToPaths는 결과적으로 이 이미지 태그들을 순회하면서 서버에 저장되지 않은 이미지라면 서버에 저장하고 그 결과를 imagePath의 형태로 리턴하는 역할을 수행한다.

문제는 서버에 저장되어 있는지의 여부를 따지는 부분이다. 해당 함수는 이미지 태그의 alt 속성에 저장되어 있던 filename을 키로 서버에 요청을 보내어 해당 이름으로 저장된 이미지가 이미 존재하는지 확인한다. 따라서 이미 같은 파일명으로 저장되어 있는 다른 이미지가 있다면, 실제로는 전혀 다른 이미지임에도 불구하고 이미 존재하는 이미지로 간주되어 업로드가 취소되고 기존 이미지의 path를 반환하는 것이다.

이외에도, 사실상 tagStringsToPaths가 포함된 이 일련의 과정은 contents를 제출(submit)할 때 아직 서버에 업로드 되어있지 않은 이미지를 확인하고 해당 이미지를 업로드 한 후에 서버에서 발급된 src를 꽂은 태그 스트링으로 변환하는 것이 목적이다. 따라서 애초에 contents에 존재하는 모든 이미지를 대상으로 순회할 필요가 없다.



정리하자면 문제는 크게 두 가지이다.

- 이미지파일의 중복 확인 및 업로드가 목적이므로 글에 존재하는 모든 '이미지 태그' 를 대상으로 순회할 필요가 없다.
- 파일명이 아닌 파일의 고유한 값을 기준으로 비교해야한다.



## 어떻게 해결했는가

솔루션에 대해 조금 더 자세히 적어두려고 한다.

기존처럼 contents에 포함된 모든 이미지가 아니라, 해당 세션에서 업로드 한 이미지만을 가지고 있는 `mediaFiles` 상태를 기준으로 판단하는 것이 더 효율적일 것이다. `mediaFiles` 를 기준으로 순회하면서 중복을 판단하고, 기존에 있던 paths같은 무의미한 중간 객체가 아니라 이미지들을 키값으로 저장한 Map으로 정리해 반환해서 최종적으로 contents replace 콜백에서 키값으로 한번에 필요한 이미지를 꺼내어 태그로 변환할 수 있도록 한다.

단, contents에 존재하는 모든 이미지를 기준으로 했을때와 달리 컨텐츠를 수정하며 제거되어 업로드 될 필요가 없는 파일도 mediaFiles에 포함되어 있을 수 있기 때문에 contents의 이미지들을 기준으로 한번의 필터링이 필요하다*

진짜 문제였던 파일명으로 중복을 검사했던 상황은 SHA-256으로 해싱한 값을 기준으로 비교하도록 수정해 제대로 중복 여부를 확인할 수 있도록 했다. 이미지를 저장할 때 파일명이 아닌 해시값을 메인키로 저장하고, mediaFiles를 순회하며 같은 해시값으로 저장된 이미지가 있는지를 확인해 업로드 여부를 검사한다.



```ts
const resolveImages = curry(
  async (
    mediaFiles: Array<MediaFile>,
    contents: string,
  ) => {
    const { registered, pending } =
      await filterUnregisteredMedia(mediaFiles);

    const uploaded = await uploadPendingMedia(pending);

    const uploadedByHash = new Map<
      string,
      UploadedMedia
    >([...registered, ...uploaded]);

    return replaceImageTags(contents, uploadedByHash);
  },
);
```

함수의 이름들에 주목해본다면 훨씬 더 간결하고 목적에 맞는 이름들로 변화한 것을 알아볼 수 있다. 또한 기존에는 하나의 함수 안에서 진행하던 여러개의 일들을 쪼개어 하나의 함수에서 하나의 일만 할 수 있도록 만들었다.