import SetDescriptor from "../../descriptor/boolean/setter";
import PropertyDescriptor from "../../descriptor/boolean/property";
import Descriptor from "../../descriptor/from-object";
import HasProperty from "./exists";
import { ReadableParameter } from "./readable";
export default Writable;
var Writable;
(function (Writable) {
    Writable.Parameter = ReadableParameter;
    Writable.Object = ReadableObject;
})(Writable || (Writable = {}));
/**
 * check if property is writable
 */
export function WritableParameter(value, property) {
    let descriptor = Descriptor.Parameter(value, property);
    if (!descriptor) {
        return false;
    }
    // property
    // all descriptor property must true
    if (PropertyDescriptor(descriptor) && HasProperty(descriptor, 'writable') && descriptor.writable) {
        return true;
    }
    // setter
    if (SetDescriptor(descriptor)) {
        return true;
    }
    return false;
}
export function ReadableObject({ value, property, }) {
    return ReadableParameter(value, property);
}
//# sourceMappingURL=writable.js.map