import PropertyValueArgumentValidation from "../../../assert/string/value-validation";
import PropertyInterface from "../property";
import Value from "@dikac/t-value/value";
import Validation from "@dikac/t-boolean/validation/validation";
import Name from "../../../string/name";
import {PropertyValueArgument} from "../string/value-validation";

export default PropertyValue;
namespace PropertyValue {

    export const Parameter = PropertyValueParameter;
    export const Object = PropertyValueObject;
    export type Argument = PropertyValueArgument;
}


export function PropertyValueParameter(
    property : PropertyKey,
    type : string,
    validation : (...arg: any[]) => boolean
) : Error {

    let message = PropertyValueArgumentValidation.Parameter(
        property,
        false,
        type,
        Name(validation)
    );

    return new Error(message);
}

export function PropertyValueObject(
    {property, type, validation} : PropertyInterface & {type : string} & Validation<any[]>
) : Error {

    return PropertyValueParameter(property, type, validation);
}
