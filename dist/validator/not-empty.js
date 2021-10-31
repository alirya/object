import NotEmptyValidatable from "../validatable/not-empty";
import NotEmptyString from "../assert/string/not-empty";
export default function NotEmpty(message = NotEmptyString.Object) {
    return function (value) {
        return new NotEmptyValidatable.Parameter(value, message);
    };
}
//# sourceMappingURL=not-empty.js.map