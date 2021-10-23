import Builder from "./builder";
/**
 * @deprecated
 * create simple {@see Builder} without context & option
 */
export default function Simple<Type extends object>(): Builder<Type, void, void>;
