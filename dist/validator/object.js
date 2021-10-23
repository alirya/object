import ObjectValidatable from "../validatable/object";
import ObjectString from "../validatable/string/object";
export default function Object_(message = ObjectString) {
    return function (value) {
        return ObjectValidatable(value, message);
    };
}
//# sourceMappingURL=object.js.map