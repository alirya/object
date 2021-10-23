import AssertObject from "../assert/object";
import ObjectError from "../assert/throwable/object";
export default function Object_(
//value : unknown,
//error : (value:unknown)=>Error = ObjectError,
{ value, error = ObjectError, }) {
    AssertObject(value, error);
    return value;
}
//# sourceMappingURL=object.js.map