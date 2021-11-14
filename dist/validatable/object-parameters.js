import Callback from "@dikac/t-validator/validatable/callback";
import ObjectGuard from "../boolean/object";
export default function ObjectParameters(value, message) {
    return Callback.Function.Parameters(value, ObjectGuard, message);
}
//# sourceMappingURL=object-parameters.js.map