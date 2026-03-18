export interface PostObject {
  Key: string;
  ETag: string;
  Size: number;
}

const fetchPosts = (): Promise<PostObject[]> =>
  fetch(
    "https://oct7lssmetmk5ftplu4npwnwne0bdkyp.lambda-url.ap-northeast-2.on.aws"
  ).then((res) => res.json());

export default fetchPosts;
