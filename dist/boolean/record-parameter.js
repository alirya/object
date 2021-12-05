export default function RecordParameter(object, { value, property }) {
    for (const [prop, val] of Object.entries(object)) {
        if (property) {
            if (!property(prop)) {
                return false;
            }
        }
        if (!value(val)) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=record-parameter.js.map