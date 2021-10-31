import PropertyValueMessage from "../string/value";
import { ObjectObject, ObjectParameter } from "./object";
export default Value;
var Value;
(function (Value) {
    Value.Parameter = ObjectParameter;
    Value.Object = ObjectObject;
})(Value || (Value = {}));
export function ValueParameter(property, type) {
    return new Error(PropertyValueMessage.Parameter(property, false, type));
}
export function ValueObject(
// property : PropertyKey,
// type : string,
{ property, type }) {
    return ValueParameter(property, type);
}
//# sourceMappingURL=value.js.map