import PropertyInterface from "../property";
import Validatable from "@dikac/t-validatable/validatable";
import Validation from "@dikac/t-boolean/validation/validation";
import PropertyValueParameters from "./value-validation-parameters";

// export default PropertyValue;
// namespace PropertyValue {
//
//     export const Parameter = PropertyValueParameter;
//     export const Object = PropertyValueObject;
//     export type Argument = PropertyValueArgument;
// }
//
// export function PropertyValueParameter(
//   property : PropertyKey,
//   valid : boolean,
//   validation : (...arg: any[]) => boolean,
//   type : string
// ) : string {
//
//     return PropertyValueArgumentValidation.Parameter(
//         property,
//         valid,
//         type,
//         Name(validation)
//     );
// }

export type PropertyValueArgument = PropertyInterface & {type : string} & Validatable & Validation<any[]>;

export default function PropertyValueParameter({
  valid,
  validation,
  property,
  type
} : PropertyInterface & {type : string} & Validatable & Validation<any[]>) : string {

    return PropertyValueParameters(
        property,
        valid,
        validation,
        type,
    );
}
