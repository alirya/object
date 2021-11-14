import GetDescriptor from "../../descriptor/boolean/getter";
import Descriptor from "../../descriptor/from-object";
import HasProperty from "./exists";
/**
 * check if property is readable
 */
export default function ReadableParameters(value, property) {
    let descriptor = Descriptor.Parameters(value, property);
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
//# sourceMappingURL=readable-parameters.js.map