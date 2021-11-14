import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export declare type NameNotFoundArgument = Validatable & Value & {
    subject?: string;
    conversion?: (value: unknown) => string;
};
export default function NameNotFoundParameter({ valid, value, subject, conversion, }: NameNotFoundArgument): string;
