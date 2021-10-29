import Callback from "@dikac/t-validator/validatable/callback";
import ObjectGuard from "../boolean/object";
export function ObjectParameter(value, message) {
    return Callback({ value, validation: ObjectGuard, message });
}
var Object_;
(function (Object_) {
    Object_.Parameter = ObjectParameter;
    Object_.Object = ObjectObject;
})(Object_ || (Object_ = {}));
export function ObjectObject(
// value : Argument,
// message : (result:Readonly<Value<Argument> & Validatable>)=>MessageType,
{ value, message }) {
    return Callback({ value, validation: ObjectGuard, message });
}
//# sourceMappingURL=object.js.map