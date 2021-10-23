import PropertyValueArgument from "../../../assert/string/value";
export default function Value(data) {
    return new Error(PropertyValueArgument(Object.assign({ valid: false }, data)));
}
//# sourceMappingURL=value.js.map