// eslint-disable-next-line @typescript-eslint/ban-types
export type Override<T, U extends { [Key in keyof T]?: unknown }> = Omit<
  T,
  keyof U
> &
  U;

export type Entries<T> = Array<
  keyof T extends infer U ? (U extends keyof T ? [U, T[U]] : never) : never
>;

export type ArrayElem<ArrayType extends readonly unknown[]> =
  ArrayType extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type OmitStrict<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type Nullable<T> = T | null | undefined;

export type PartialRecursive<T> = {
  [P in keyof T]?: T[P] extends Array<infer U>
    ? Array<PartialRecursive<U>>
    : T[P] extends object | undefined
      ? PartialRecursive<T[P]>
      : T[P];
};

// eslint-disable-next-line @typescript-eslint/naming-convention
export type Brand<K, T> = K & { __brand: T };
// ref: https://www.totaltypescript.com/concepts/the-prettify-helper
export type Prettify<T> = {
  [K in keyof T]: T[K];
  // eslint-disable-next-line @typescript-eslint/ban-types
} & {};
