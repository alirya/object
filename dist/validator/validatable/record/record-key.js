export default function RecordKey(object, value) {
    let result = {};
    for (const k of Object.keys(object)) {
        result[k] = value(k);
    }
    return result;
}
//# sourceMappingURL=record-key.js.map