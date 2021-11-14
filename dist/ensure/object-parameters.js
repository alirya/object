import AssertObject from "../assert/object";
import ObjectError from "../assert/throwable/object";
export default function ObjectParameters(value, error = ObjectError.Parameter) {
    AssertObject(value, error);
    return value;
}
//# sourceMappingURL=object-parameters.js.map