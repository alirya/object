import NotEmptyString from "../assert/string/not-empty";
import NotEmptyParameters from "./not-empty-parameters";
export default function NotEmptyParameter(message = NotEmptyString.Parameter) {
    return NotEmptyParameters((value, valid) => message({ valid, value }));
}
//# sourceMappingURL=not-empty-parameter.js.map