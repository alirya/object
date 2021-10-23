import IteratorRecordKey from "../iterator/record-key";
export default function RecordKeyz({ value, validator }) {
    let result = {};
    for (const [key, validatable] of IteratorRecordKey({ value, validator })) {
        result[key] = validatable;
    }
    return result;
}
//# sourceMappingURL=record-key.js.map