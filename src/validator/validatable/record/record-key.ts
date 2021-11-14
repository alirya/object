import RecordKeyParameter from "./record-key-parameter";
import RecordKeyParameters from "./record-key-parameters";

namespace RecordKey {
    export const Parameter = RecordKeyParameter;
    export const Parameters = RecordKeyParameters;
}
export default RecordKey;
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
