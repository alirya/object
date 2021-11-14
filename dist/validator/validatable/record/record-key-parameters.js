import IteratorRecordKey from "../iterator/record-key";
// export default RecordKey;
// namespace RecordKey {
//     export const Parameter = RecordKeyParameter;
//     export const Object = RecordKeyObject;
// }
export default function RecordKeyParameters(value, validator) {
    let result = {};
    for (const [key, validatable] of IteratorRecordKey.Parameters(value, validator)) {
        result[key] = validatable;
    }
    return result;
}
//
// export function RecordKeyObject<
//     RecordType extends Record<PropertyKey, any>,
//     ValidatorType extends Validator<keyof RecordType>,
// >(
//     {
//         value,
//         validator
//     } : Value<RecordType> & ValidatorContainer<ValidatorType>
// ) : MapInterface<RecordType, Return<ValidatorType>>  {
//
//     return RecordKeyParameter(value, validator);
// }
//# sourceMappingURL=record-key-parameters.js.map