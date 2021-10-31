import PropertyInterface from "../property";
import Validation from "@dikac/t-boolean/validation/validation";
import { PropertyValueArgument } from "../string/value-validation";
export default PropertyValue;
declare namespace PropertyValue {
    const Parameter: typeof PropertyValueParameter;
    const Object: typeof PropertyValueObject;
    type Argument = PropertyValueArgument;
}
export declare function PropertyValueParameter(property: PropertyKey, type: string, validation: (...arg: any[]) => boolean): Error;
export declare function PropertyValueObject({ property, type, validation }: PropertyInterface & {
    type: string;
} & Validation<any[]>): Error;
