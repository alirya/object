import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export declare type ObjectArgument = Validatable & Value & {
    subject?: string;
} & {
    conversion?: (value: unknown) => string;
};
export default function ObjectParameter({ valid, value, subject, conversion, }: ObjectArgument): string;
