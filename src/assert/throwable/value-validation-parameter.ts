import Validatable from "@dikac/t-validatable/validatable";
import Property from "../../property/property/property";
import ValueValidationParameters from "./value-validation-parameters";


// export default ValueValidation;
// namespace ValueValidation {
//
//     export const Parameter = ValueValidationParameter;
//     export const Object = ValueValidationObject;
//     export type Argument = ValueValidationArgument;
// }
//
//
// export function ValueValidationParameter(
//     property : PropertyKey,
//     type : string,
//     validation : string,
//     // {
//     //     property,
//     //     type,
//     //     validation,
//     // } : Validatable & Property & {type : string} & { validation: string }
// ) : Error {
//
//     return new Error(
//         PropertyValueValidationMessage.Parameter(property, false, type, validation)
//     );
// }

export type ValueValidationArgument = Validatable & Property & {type : string} & { validation: string };

export default function ValueValidationParameter(
    //property : PropertyKey,
    //type : string,
    //validation : string,
    {
        property,
        type,
        validation,
    } : ValueValidationArgument
) : Error {

    return ValueValidationParameters(property, type, validation);
}
