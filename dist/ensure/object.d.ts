import Value from "@dikac/t-value/value";
export default Object_;
declare namespace Object_ {
    const Parameter: typeof ObjectParameter;
    const Object: typeof ObjectObject;
    type Argument = ObjectArgument;
}
export declare function ObjectParameter(value: unknown, error?: (value: unknown) => Error): object;
export declare type ObjectArgument = Value<unknown> & {
    error?: (value: unknown) => Error;
};
export declare function ObjectObject({ value, error, }: ObjectArgument): object;
