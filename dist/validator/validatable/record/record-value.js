import IteratorRecordValue from "../iterator/record-value";
export default RecordValue;
var RecordValue;
(function (RecordValue) {
    RecordValue.Parameter = RecordValueParameter;
    RecordValue.Object = RecordValueObject;
})(RecordValue || (RecordValue = {}));
export function RecordValueParameter(value, validator) {
    let result = {};
    for (const [key, validatable] of IteratorRecordValue.Parameter(value, validator)) {
        result[key] = validatable;
    }
    return result;
}
export function RecordValueObject(
// value : RecordType,
// validator : ValidatorType,
{ value, validator, }) {
    return RecordValueParameter(value, validator);
}
//# sourceMappingURL=record-value.js.map