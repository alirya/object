import OrBoolean from "./record/boolean/or";
import Validatables from "./validatables";
export default function Or(validatables) {
    return new Validatables.Parameters(validatables, OrBoolean);
}
//# sourceMappingURL=or.js.map