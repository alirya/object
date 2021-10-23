import Validatable from "@dikac/t-validatable/validatable";
import Property from "../../property/property/property";
export default function ValueValidation({ property, type, validation, }: Validatable & Property & {
    type: string;
} & {
    validation: string;
}): Error;
