import PropertyInterface from "../property";
import Validation from "@dikac/t-boolean/validation/validation";
export default function PropertyValueParameter({ property, type, validation }: PropertyInterface & {
    type: string;
} & Validation<any[]>): Error;
