import PropertyValueArgumentValidation from "../../../assert/string/value-validation";
import Name from "../../../string/name";
export default PropertyValue;
var PropertyValue;
(function (PropertyValue) {
    PropertyValue.Parameter = PropertyValueParameter;
    PropertyValue.Object = PropertyValueObject;
})(PropertyValue || (PropertyValue = {}));
export function PropertyValueParameter(property, valid, validation, type) {
    return PropertyValueArgumentValidation.Parameter(property, valid, type, Name(validation));
}
export function PropertyValueObject({ valid, validation, property, type }) {
    return PropertyValueParameter(property, valid, validation, type);
}
//# sourceMappingURL=value-validation.js.map