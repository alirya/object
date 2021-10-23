import PropertyValueMessage from "../string/value";
export default function Value(
// property : PropertyKey,
// type : string,
{ property, type }) {
    return new Error(PropertyValueMessage({ valid: false, property, type }));
}
//# sourceMappingURL=value.js.map