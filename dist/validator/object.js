import ObjectValidatable from "../validatable/object";
import ObjectString from "../assert/string/object";
export default function Object_(message = ObjectString.Object) {
    return function (value) {
        return ObjectValidatable.Parameter(value, message);
    };
}
//# sourceMappingURL=object.js.map