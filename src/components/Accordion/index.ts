export * from "./Accordion";
export * from "./hooks";
export * from "./types";

// TODO! fixing smooth animation in nested accordion, by implementing internal expand status
//?         mounted max-h: 0,
//?         opening max-h: var(--height),
//?         opened max-h: var(--height), transition max-h 0s
//?         closing max-h: 0,
//?         closed return null,
//?             when status === opened then transition 0 for it to not deleying animation after nested content changes height

// TODO! accordion tree theme

// TODO! cleaning code

// TODO! hooks for storing accordion state outside
// TODO! smart expanding with nested accordions
