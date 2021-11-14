import PropertyInterface from "../property";
import Validatable from "@dikac/t-validatable/validatable";
import Validation from "@dikac/t-boolean/validation/validation";
export declare type PropertyValueArgument = PropertyInterface & {
    type: string;
} & Validatable & Validation<any[]>;
export default function PropertyValueParameter({ valid, validation, property, type }: PropertyInterface & {
    type: string;
} & Validatable & Validation<any[]>): string;
