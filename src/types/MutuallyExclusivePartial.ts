/**
 * MutuallyExclusivePartial type, in this GENERIC type you can pass two types.
 * MutuallyExclusivePartial will create a logic, which allows to pass only one of the types, and the other one has to be undefined
 */

export type MutuallyExclusivePartial<S, FS> =
  | Partial<Record<keyof S, S[keyof S]> & Record<keyof FS, undefined>>
  | Partial<Record<keyof S, undefined> & Record<keyof FS, FS[keyof FS]>>;
