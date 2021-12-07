import PropertyValueValidationMessage from "../string/value-validation-parameters";

// export default ValueValidation;
// namespace ValueValidation {
//
//     export const Parameter = ValueValidationParameter;
//     export const Object = ValueValidationObject;
//     export type Argument = ValueValidationArgument;
// }


export default function ValueValidationParameters(
    property : PropertyKey,
    type : string,
    validation : string,
    // {
    //     property,
    //     type,
    //     validation,
    // } : Validatable & Property & {type : string} & { validation: string }
) : Error {

    return new Error(
        PropertyValueValidationMessage(property, false, type, validation)
    );
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
