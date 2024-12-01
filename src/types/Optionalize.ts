import { UndefinedOptional } from "./UndefinedOptional";

/**
 *  The `Optionalize<T>` type combines an input type `T` with its optional counterpart (`UndefinedOptional<T>`).
 *  This allows the resulting type to represent either the original type `T` with some or all properties required,
 *  or a version of `T` where all properties are optional and `undefined`.
 */
export type Optionalize<T extends Record<string, unknown>> = UndefinedOptional<T> | T;
