export type WithId<T> = T & {
  id: string;
};

export type Nullable<T> = T | null;

export type Path = `/${string}`;
