import AndBoolean from "./record/boolean/and";
import Validatables from "./validatables";
export default function And(validatables) {
    return new Validatables.Parameters(validatables, AndBoolean);
}
//# sourceMappingURL=and.js.map