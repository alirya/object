import IteratorRecordValue from "../iterator/record-value";
export default function RecordValue(
// value : RecordType,
// validator : ValidatorType,
{ value, validator, }) {
    let result = {};
    for (const [key, validatable] of IteratorRecordValue({ value, validator })) {
        result[key] = validatable;
    }
    return result;
}
//# sourceMappingURL=record-value.js.map