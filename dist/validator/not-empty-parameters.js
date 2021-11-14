import NotEmptyValidatable from "../validatable/not-empty";
import NotEmptyString from "../assert/string/not-empty";
export default function NotEmptyParameters(message = NotEmptyString.Parameters) {
    return function (value) {
        return new NotEmptyValidatable.Parameters(value, message);
    };
}
//# sourceMappingURL=not-empty-parameters.js.map