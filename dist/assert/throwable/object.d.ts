import Value from "@dikac/t-value/value";
export default function Object_({ value, subject, conversion, }: Value & {
    subject?: string;
} & {
    conversion: (value: unknown) => string;
}): Error;
