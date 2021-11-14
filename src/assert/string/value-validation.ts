import ValueValidationParameter, {ValueValidationArgument} from "./value-validation-parameter";
import ValueValidationParameters from "./value-validation-parameters";

namespace ValueValidation {

    export const Parameter = ValueValidationParameter;
    export const Parameters = ValueValidationParameters;
    export type Argument = ValueValidationArgument;
}

export default ValueValidation;
//
// export function ValueValidationParameter(
//     property : PropertyKey,
//     valid : boolean,
//     type : string,
//     validation : string,
//     // {
//     //     valid,
//     //     property,
//     //     type,
//     //     validation,
//     // } : Validatable & Property & {type : string} & { validation: string }
// ) : string {
//
//     let message = Value.Parameter(property, valid, type);
//
//     return `${message}, against "${validation}"`;
//
// }
//
// export type ValueValidationArgument = Validatable & Property & {type : string} & { validation: string };
//
// export function ValueValidationObject(
//     // valid : boolean,
//     // property : PropertyKey,
//     // type : string,
//     // validation : string,
//     {
//         valid,
//         property,
//         type,
//         validation,
//     } : ValueValidationArgument
// ) : string {
//
//     let message = Value.Parameter(property, valid, type);
//
//     return `${message}, against "${validation}"`;
//
// }
