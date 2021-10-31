import AssertObject from "../assert/object";
import ObjectError from "../assert/throwable/object";
export default Object_;
var Object_;
(function (Object_) {
    Object_.Parameter = ObjectParameter;
    Object_.Object = ObjectObject;
})(Object_ || (Object_ = {}));
export function ObjectParameter(value, error = ObjectError.Parameter) {
    AssertObject(value, error);
    return value;
}
export function ObjectObject(
//value : unknown,
//error : (value:unknown)=>Error = ObjectError,
{ value, error, }) {
    return ObjectParameter(value, error);
}
//# sourceMappingURL=object.js.map