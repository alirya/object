export default function* RecordValue(
//    value : RecordType,
//    validator : ValidatorType,
{ value, validator, }
// ) : MapInterface<RecordType, Return<ValidatorType>> {
) {
    let result = {};
    for (const key in value) {
        yield [result[key], validator(value[key])];
    }
}
//# sourceMappingURL=record-value.js.map