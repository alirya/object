import Value from "./value";
export default ValueValidation;
var ValueValidation;
(function (ValueValidation) {
    ValueValidation.Parameter = ValueValidationParameter;
    ValueValidation.Object = ValueValidationObject;
})(ValueValidation || (ValueValidation = {}));
export function ValueValidationParameter(property, valid, type, validation) {
    let message = Value.Parameter(property, valid, type);
    return `${message}, against "${validation}"`;
}
export function ValueValidationObject(
// valid : boolean,
// property : PropertyKey,
// type : string,
// validation : string,
{ valid, property, type, validation, }) {
    let message = Value.Parameter(property, valid, type);
    return `${message}, against "${validation}"`;
}
//# sourceMappingURL=value-validation.js.map