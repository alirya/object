import PropertyValueValidationMessage from "../string/value-validation";
export default function ValueValidation(
//property : PropertyKey,
//type : string,
//validation : string,
{ property, type, validation, }) {
    return new Error(PropertyValueValidationMessage({ valid: false, property, type, validation }));
}
//# sourceMappingURL=value-validation.js.map