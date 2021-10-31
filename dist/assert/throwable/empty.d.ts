import Value from "@dikac/t-value/value";
export default Empty;
declare namespace Empty {
    const Parameter: typeof EmptyParameter;
    const Object: typeof EmptyObject;
    type Argument = EmptyArgument;
}
export declare function EmptyParameter(value: object, subject?: string): Error;
export declare type EmptyArgument = Value<object> & {
    subject?: string;
};
export declare function EmptyObject({ value, subject, }: EmptyArgument): Error;
