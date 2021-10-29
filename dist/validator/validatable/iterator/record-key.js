export default RecordKey;
var RecordKey;
(function (RecordKey) {
    RecordKey.Parameter = RecordKeyParameter;
    RecordKey.Object = RecordKeyObject;
})(RecordKey || (RecordKey = {}));
export function* RecordKeyParameter(value, validator) {
    for (const key in value) {
        yield [key, validator(key)];
    }
}
export function* RecordKeyObject(
// object : RecordType,
// value : ValidatorType,
{ value, validator }
// ) : RecordKeyInterface<RecordType, Return<ValidatorType>>  {
) {
    return RecordKeyParameter(value, validator);
}
//# sourceMappingURL=record-key.js.map