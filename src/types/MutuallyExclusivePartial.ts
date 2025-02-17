/** A utility type that ensures two types are mutually exclusive (only one can be defined at a time). */

export type MutuallyExclusivePartial<S, FS> =
  | Partial<Record<keyof S, S[keyof S]> & Record<keyof FS, undefined>>
  | Partial<Record<keyof S, undefined> & Record<keyof FS, FS[keyof FS]>>;
