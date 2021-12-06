import Guard from "../boolean/not-empty";
import Callback from "@dikac/t-function/assert/callback-parameters";
import NotEmptyError from "./throwable/not-empty-parameters";
export default function NotEmpty(value, error = NotEmptyError) {
    Callback(value, Guard, error);
}
//# sourceMappingURL=not-empty.js.map