import ValueValidationParameter, {ValueValidationArgument} from "./value-validation-parameter";
import ValueValidationParameters from "./value-validation-parameters";

namespace ValueValidation {

    export const Parameter = ValueValidationParameter;
    export const Parameters = ValueValidationParameters;
    export type Argument = ValueValidationArgument;
}
export default ValueValidation;
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
//
// export type ValueValidationArgument = Validatable & Property & {type : string} & { validation: string };
//
// export function ValueValidationObject(
//     //property : PropertyKey,
//     //type : string,
//     //validation : string,
//     {
//         property,
//         type,
//         validation,
//     } : ValueValidationArgument
// ) : Error {
//
//     return ValueValidationParameter(property, type, validation);
// }
