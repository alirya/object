import PropertyInterface from "../property";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import PropertyValueArgumentValidation from "../../../assert/string/value-validation";
import Validation from "@dikac/t-boolean/validation/validation";
import Name from "../../../string/name";

export default PropertyValue;
namespace PropertyValue {

    export const Parameter = PropertyValueParameter;
    export const Object = PropertyValueObject;
    export type Argument = PropertyValueArgument;
}

export function PropertyValueParameter(
  property : PropertyKey,
  valid : boolean,
  validation : (...arg: any[]) => boolean,
  type : string
) : string {

    return PropertyValueArgumentValidation.Parameter(
        property,
        valid,
        type,
        Name(validation)
    );
}

export type PropertyValueArgument = PropertyInterface & {type : string} & Validatable & Validation<any[]>;

export function PropertyValueObject({
  valid,
  validation,
  property,
  type
} : PropertyInterface & {type : string} & Validatable & Validation<any[]>) : string {

    return PropertyValueParameter(
        property,
        valid,
        validation,
        type,
    );
}
