import IteratorRecordValue from "../iterator/record-value";
export default function RecordValuePartial(
// value : RecordType,
// validator : ValidatorType,
{ value, validator, stop = false, }) {
    let result = {};
    for (const [key, validatable] of IteratorRecordValue({ value, validator })) {
        result[key] = validatable;
        if (validatable.valid === stop) {
            return result;
        }
    }
    return result;
}
//# sourceMappingURL=record-value-partial.js.map