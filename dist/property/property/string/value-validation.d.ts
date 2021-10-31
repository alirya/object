import PropertyInterface from "../property";
import Validatable from "@dikac/t-validatable/validatable";
import Validation from "@dikac/t-boolean/validation/validation";
export default PropertyValue;
declare namespace PropertyValue {
    const Parameter: typeof PropertyValueParameter;
    const Object: typeof PropertyValueObject;
    type Argument = PropertyValueArgument;
}
export declare function PropertyValueParameter(property: PropertyKey, valid: boolean, validation: (...arg: any[]) => boolean, type: string): string;
export declare type PropertyValueArgument = PropertyInterface & {
    type: string;
} & Validatable & Validation<any[]>;
export declare function PropertyValueObject({ valid, validation, property, type }: PropertyInterface & {
    type: string;
} & Validatable & Validation<any[]>): string;
