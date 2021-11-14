import PropertyValueValidationMessage from "../string/value-validation";
// export default ValueValidation;
// namespace ValueValidation {
//
//     export const Parameter = ValueValidationParameter;
//     export const Object = ValueValidationObject;
//     export type Argument = ValueValidationArgument;
// }
export default function ValueValidationParameters(property, type, validation) {
    return new Error(PropertyValueValidationMessage.Parameters(property, false, type, validation));
}
// export type ValueValidationArgument = Validatable & Property & {type : string} & { validation: string };
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
//# sourceMappingURL=value-validation-parameters.js.map