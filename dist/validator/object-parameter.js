import ObjectString from "../assert/string/object";
import ObjectParameters from "./object-parameters";
export default function ObjectParameter(message = ObjectString.Parameter) {
    if (message) {
        return ObjectParameters((value, valid) => message({ value, valid }));
    }
    else {
        return ObjectParameters();
    }
}
//# sourceMappingURL=object-parameter.js.map