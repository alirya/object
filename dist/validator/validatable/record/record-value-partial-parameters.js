import IteratorRecordValue from "../iterator/record-value";
export default function RecordValuePartialParameters(value, validator, stop = false) {
    let result = {};
    for (const [key, validatable] of IteratorRecordValue.Parameters(value, validator)) {
        result[key] = validatable;
        if (validatable.valid === stop) {
            return result;
        }
    }
    return result;
}
//# sourceMappingURL=record-value-partial-parameters.js.map