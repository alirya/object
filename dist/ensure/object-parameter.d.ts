import Value from "@dikac/t-value/value";
export declare type ObjectArgument = Value<unknown> & {
    error?: (value: unknown) => Error;
};
export default function ObjectParameter({ value, error, }: ObjectArgument): object;
