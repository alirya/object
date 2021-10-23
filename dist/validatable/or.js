import OrBoolean from "./record/boolean/or";
import Validatables from "./validatables";
export default function Or(validatables) {
    return new Validatables({ validatables, validation: OrBoolean });
}
//# sourceMappingURL=or.js.map