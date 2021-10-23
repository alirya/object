import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
/**
 * string intended for empty object
 *
 * @param valid
 * @param value
 * @param subject
 */
export default function Empty({ valid, value, subject, }: Validatable & Value & {
    subject?: string;
}): string;
