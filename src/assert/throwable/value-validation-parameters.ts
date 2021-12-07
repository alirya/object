import PropertyValueValidationMessage from "../string/value-validation-parameters";

export default function ValueValidationParameters(
    property : PropertyKey,
    type : string,
    validation : string,
) : Error {

    return new Error(
        PropertyValueValidationMessage(property, false, type, validation)
    );
}
