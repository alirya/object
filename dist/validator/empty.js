import EmptyValidatable from "../validatable/empty";
import EmptyString from "../assert/string/empty";
export function EmptyParameter(message = EmptyString.Parameter) {
    return function (value) {
        return new EmptyValidatable.Parameter(value, message);
    };
}
export function EmptyObject(message = EmptyString.Object) {
    return function (value) {
        return new EmptyValidatable.Object({ value, message });
    };
}
//# sourceMappingURL=empty.js.map