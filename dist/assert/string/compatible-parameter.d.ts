import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export declare type CompatibleArgument = Validatable & Value & {
    expect: string;
    subject?: string;
    conversion: (value: unknown) => string;
};
export default function CompatibleParameter({ valid, value, expect, subject, conversion, }: CompatibleArgument): string;
