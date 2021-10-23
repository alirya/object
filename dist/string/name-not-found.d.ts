import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export default function NameNotFound({ valid, value, subject, conversion, }: Validatable & Value & {
    subject?: string;
    conversion?: (value: unknown) => string;
}): string;
