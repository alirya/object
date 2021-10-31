import Callback from "@dikac/t-validator/validatable/callback";
import ObjectGuard from "../boolean/object";
export default Object_;
var Object_;
(function (Object_) {
    Object_.Parameter = ObjectParameter;
    Object_.Object = ObjectObject;
})(Object_ || (Object_ = {}));
export function ObjectParameter(value, message) {
    return Callback.Function.Parameter(value, ObjectGuard, message);
}
export function ObjectObject(
// value : Argument,
// message : (result:Readonly<Value<Argument> & Validatable>)=>MessageType,
{ value, message }) {
    return ObjectParameter(value, message);
}
//# sourceMappingURL=object.js.map