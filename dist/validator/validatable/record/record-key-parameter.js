import RecordKeyParameters from "./record-key-parameters";
//
// export default RecordKey;
// namespace RecordKey {
//     export const Parameter = RecordKeyParameter;
//     export const Object = RecordKeyObject;
// }
//
// export function RecordKeyParameter<
//     RecordType extends Record<PropertyKey, any>,
//     ValidatorType extends Validator<keyof RecordType>,
// >(
//     value : RecordType,
//     validator : ValidatorType
// ) : MapInterface<RecordType, Return<ValidatorType>>  {
//
//     let result = {};
//
//     for(const [key, validatable] of IteratorRecordKey.Parameter(value, validator)) {
//
//         result[key as PropertyKey] = validatable
//     }
//
//     return <MapInterface<RecordType, Return<Value>>> result;
// }
export default function RecordKeyParameter({ value, validator }) {
    return RecordKeyParameters(value, validator);
}
//# sourceMappingURL=record-key-parameter.js.map