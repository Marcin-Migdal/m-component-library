export type UndefinedOptional<T extends Record<string, unknown>> = Partial<Record<keyof T, undefined>>;
