import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
/**
 * string intended for not empty object
 *
 * @param valid
 * @param value
 * @param subject
 */
export default function NotEmpty({ valid, value, subject, }: Validatable & Value & {
    subject?: string;
}): string;
