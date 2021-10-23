import PropertyInterface from "../property";
import Validatable from "@dikac/t-validatable/validatable";
import Validation from "@dikac/t-boolean/validation/validation";
export default function PropertyValue({ valid, validation, property, type }: PropertyInterface & {
    type: string;
} & Validatable & Validation<any[]>): string;
