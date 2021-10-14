export default function RecordValue(object, value) {
    let result = {};
    for (const [k, v] of Object.entries(object)) {
        result[k] = value(v);
    }
    return result;
}
//# sourceMappingURL=record-value.js.map