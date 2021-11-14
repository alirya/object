import ValueValidationParameter from "./value-validation-parameter";
import ValueValidationParameters from "./value-validation-parameters";
var ValueValidation;
(function (ValueValidation) {
    ValueValidation.Parameter = ValueValidationParameter;
    ValueValidation.Parameters = ValueValidationParameters;
})(ValueValidation || (ValueValidation = {}));
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
//# sourceMappingURL=value-validation.js.map