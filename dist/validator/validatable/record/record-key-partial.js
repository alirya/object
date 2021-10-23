import IteratorRecordKey from "../iterator/record-key";
export default function RecordVKeyPartial({ value, validator, stop = false, }) {
    let result = {};
    for (const [key, validatable] of IteratorRecordKey({ value, validator })) {
        result[key] = validatable;
        if (validatable.valid === stop) {
            return result;
        }
    }
    return result;
}
//# sourceMappingURL=record-key-partial.js.map