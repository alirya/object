export default RecordValue;
var RecordValue;
(function (RecordValue) {
    RecordValue.Parameter = RecordValueParameter;
    RecordValue.Object = RecordValueObject;
})(RecordValue || (RecordValue = {}));
export function* RecordValueParameter(value, validator) {
    let result = {};
    for (const key in value) {
        yield [result[key], validator(value[key])];
    }
}
export function* RecordValueObject(
//    value : RecordType,
//    validator : ValidatorType,
{ value, validator, }
// ) : MapInterface<RecordType, Return<ValidatorType>> {
) {
    return RecordValueParameter(value, validator);
}
//# sourceMappingURL=record-value.js.map