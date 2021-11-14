import Value from "@dikac/t-value/value";
export declare type ObjectArgument = Value & {
    subject?: string;
} & {
    conversion: (value: unknown) => string;
};
export default function ObjectParameter({ value, subject, conversion, }: ObjectArgument): Error;
