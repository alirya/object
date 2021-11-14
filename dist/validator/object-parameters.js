import ObjectValidatable from "../validatable/object";
import ObjectString from "../assert/string/object";
export default function ObjectParameters(message = ObjectString.Parameters) {
    return function (value) {
        return ObjectValidatable.Parameters(value, message);
    };
}
//# sourceMappingURL=object-parameters.js.map