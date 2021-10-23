import Callback from "@dikac/t-validator/validatable/callback";
import ObjectGuard from "../boolean/object";
export default function Object_(value, message) {
    return Callback({ value, validation: ObjectGuard, message });
}
//# sourceMappingURL=object.js.map