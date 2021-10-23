import EmptyValidatable from "../validatable/empty";
import EmptyString from "../validatable/string/empty";
export default function Empty(message = EmptyString) {
    return function (value) {
        return new EmptyValidatable({ value, message });
    };
}
//# sourceMappingURL=empty.js.map