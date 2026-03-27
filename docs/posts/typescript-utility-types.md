---
title: TypeScript 유틸리티 타입 제대로 쓰기
date: 2024-05-22
tags: [typescript, types]
---

TypeScript의 내장 유틸리티 타입들은 반복적인 타입 정의를 줄이고 표현력을 높여준다. 자주 쓰지만 놓치기 쉬운 것들을 정리했다.

## Partial vs Required

`Partial<T>`는 모든 프로퍼티를 optional로 만들고, `Required<T>`는 반대로 모두 필수로 만든다.

```ts
interface Config {
  host: string;
  port: number;
  debug?: boolean;
}

type PartialConfig = Partial<Config>;
// { host?: string; port?: number; debug?: boolean; }

type StrictConfig = Required<Config>;
// { host: string; port: number; debug: boolean; }
```

업데이트 함수의 인자 타입으로 `Partial`이 자주 쓰인다.

## Pick과 Omit

`Pick<T, K>`는 특정 키만 선택하고, `Omit<T, K>`는 특정 키를 제외한다.

```ts
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

type PublicUser = Omit<User, 'password'>;
// { id: number; name: string; email: string; }

type UserPreview = Pick<User, 'id' | 'name'>;
// { id: number; name: string; }
```

## ReturnType과 Parameters

함수 타입에서 반환 타입과 매개변수 타입을 추출할 수 있다. 라이브러리 함수의 타입을 재사용할 때 유용하다.

```ts
function createUser(name: string, age: number) {
  return { id: Math.random(), name, age };
}

type User = ReturnType<typeof createUser>;
// { id: number; name: string; age: number; }

type CreateUserArgs = Parameters<typeof createUser>;
// [name: string, age: number]
```

## Discriminated Union과 Extract/Exclude

`Extract<T, U>`와 `Exclude<T, U>`는 유니온 타입을 좁히는 데 쓰인다.

```ts
type Status = 'idle' | 'loading' | 'success' | 'error';

type ActiveStatus = Exclude<Status, 'idle'>;
// 'loading' | 'success' | 'error'

type FinishedStatus = Extract<Status, 'success' | 'error'>;
// 'success' | 'error'
```

이 타입들을 조합하면 타입 중복 없이 일관성 있는 타입 시스템을 만들 수 있다.
