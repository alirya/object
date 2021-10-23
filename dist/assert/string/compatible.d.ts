import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export default function Compatible({ valid, value, expect, subject, conversion, }: Validatable & Value & {
    expect: string;
    subject?: string;
    conversion: (value: unknown) => string;
}): string;
