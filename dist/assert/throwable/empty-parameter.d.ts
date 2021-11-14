import Value from "@dikac/t-value/value";
export declare type EmptyArgument = Value<object> & {
    subject?: string;
};
export default function EmptyParameter({ value, subject, }: EmptyArgument): Error;
