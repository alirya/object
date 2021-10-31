import Value from "@dikac/t-value/value";
export default Object_;
declare namespace Object_ {
    const Parameter: typeof ObjectParameter;
    const Object: typeof ObjectObject;
    type Argument = ObjectArgument;
}
export declare function ObjectParameter(value: unknown, subject?: string, conversion?: (value: unknown) => string): Error;
export declare type ObjectArgument = Value & {
    subject?: string;
} & {
    conversion: (value: unknown) => string;
};
export declare function ObjectObject({ value, subject, conversion, }: Value & {
    subject?: string;
} & {
    conversion: (value: unknown) => string;
}): Error;
