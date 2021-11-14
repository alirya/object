import EmptyString from "../assert/string/empty";
import EmptyParameters from "./empty-parameters";
export default function EmptyParameter(message = EmptyString.Parameter) {
    return EmptyParameters((value, valid) => message({ valid, value }));
}
//# sourceMappingURL=empty-parameter.js.map