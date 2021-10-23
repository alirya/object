import Validatable from "@dikac/t-validatable/validatable";
import Property from "../../property/property/property";
/**
 * {@param valid} type is valid or not
 * {@param property} object property
 * {@param type} expected type
 */
export default function Value({ valid, property, type, }: Validatable & Property & {
    type: string;
}): string;
