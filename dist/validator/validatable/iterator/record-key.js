export default function* RecordKey(
// object : RecordType,
// value : ValidatorType,
{ value, validator }
// ) : MapInterface<RecordType, Return<ValidatorType>>  {
) {
    for (const key in value) {
        yield [key, validator(key)];
    }
}
//# sourceMappingURL=record-key.js.map