import PropertyInterface from "../property";
import Validatable from "@dikac/t-validatable/validatable";
/**
 * @deprecated
 * @param data
 * @constructor
 */
export default function Value(data: PropertyInterface & {
    type: string;
} & Validatable): string;
