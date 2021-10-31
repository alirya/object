import PropertyValueValidationMessage from "../string/value-validation";
export default ValueValidation;
var ValueValidation;
(function (ValueValidation) {
    ValueValidation.Parameter = ValueValidationParameter;
    ValueValidation.Object = ValueValidationObject;
})(ValueValidation || (ValueValidation = {}));
export function ValueValidationParameter(property, type, validation) {
    return new Error(PropertyValueValidationMessage.Parameter(property, false, type, validation));
}
export function ValueValidationObject(
//property : PropertyKey,
//type : string,
//validation : string,
{ property, type, validation, }) {
    return ValueValidationParameter(property, type, validation);
}
//# sourceMappingURL=value-validation.js.map