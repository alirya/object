import PropertyValueArgumentValidation from "../../../assert/string/value-validation";
import Name from "../../../string/name";
export default PropertyValue;
var PropertyValue;
(function (PropertyValue) {
    PropertyValue.Parameter = PropertyValueParameter;
    PropertyValue.Object = PropertyValueObject;
})(PropertyValue || (PropertyValue = {}));
export function PropertyValueParameter(property, type, validation) {
    let message = PropertyValueArgumentValidation.Parameter(property, false, type, Name(validation));
    return new Error(message);
}
export function PropertyValueObject({ property, type, validation }) {
    return PropertyValueParameter(property, type, validation);
}
//# sourceMappingURL=value-validation.js.map