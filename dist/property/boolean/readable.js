import GetDescriptor from "../../descriptor/boolean/getter";
import Descriptor from "../../descriptor/from-object";
import HasProperty from "./exists";
export default Readable;
var Readable;
(function (Readable) {
    Readable.Parameter = ReadableParameter;
    Readable.Object = ReadableObject;
})(Readable || (Readable = {}));
/**
 * check if property is readable
 */
export function ReadableParameter(value, property) {
    let descriptor = Descriptor.Parameter(value, property);
    if (!descriptor) {
        return false;
    }
    if (HasProperty(descriptor, 'value')) {
        return true;
    }
    // getter
    if (GetDescriptor(descriptor)) {
        return true;
    }
    return false;
}
export function ReadableObject({ value, property, }) {
    return ReadableParameter(value, property);
}
//# sourceMappingURL=readable.js.map