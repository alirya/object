import IteratorRecordValue from "../iterator/record-value";
export default RecordValuePartial;
var RecordValuePartial;
(function (RecordValuePartial) {
    RecordValuePartial.Parameter = RecordValuePartialParameter;
    RecordValuePartial.Object = RecordValuePartialObject;
})(RecordValuePartial || (RecordValuePartial = {}));
export function RecordValuePartialParameter(value, validator, stop = false) {
    let result = {};
    for (const [key, validatable] of IteratorRecordValue({ value, validator })) {
        result[key] = validatable;
        if (validatable.valid === stop) {
            return result;
        }
    }
    return result;
}
export function RecordValuePartialObject(
// value : RecordType,
// validator : ValidatorType,
{ value, validator, stop, }) {
    return RecordValuePartialParameter(value, validator, stop);
}
//# sourceMappingURL=record-value-partial.js.map