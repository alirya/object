import PropertyInterface from "../property";
import Validation from "@dikac/t-boolean/validation/validation";
export default function PropertyValue({ property, type, validation }: PropertyInterface & {
    type: string;
} & Validation<any[]>): Error;
