import RecordValueParameters from "./record-value-parameters";
import RecordValueParameter from "./record-value-parameter";

namespace RecordValue {
    export const Parameters = RecordValueParameters;
    export const Parameter = RecordValueParameter;
}
export default RecordValue;

//
// export function RecordValueParameter<
//     RecordType extends Record<PropertyKey, any>,
//     ValidatorType extends Validator<O.UnionOf<RecordType>>,
// >(
//     value : RecordType,
//     validator : ValidatorType,
//     // {
//     //     value,
//     //     validator,
//     // } : Value<RecordType> & ValidatorContainer<ValidatorType>
// ) : MapInterface<RecordType, Return<ValidatorType>> {
//
//     let result = {};
//
//     for(const [key, validatable] of IteratorRecordValue.Parameter(value, validator)) {
//
//         result[key as PropertyKey] = validatable;
//     }
//
//     return <MapInterface<RecordType, Return<ValidatorType>>> result;
// }
//
// export function RecordValueObject<
//     RecordType extends Record<PropertyKey, any>,
//     ValidatorType extends Validator<O.UnionOf<RecordType>>,
// >(
//     // value : RecordType,
//     // validator : ValidatorType,
//     {
//         value,
//         validator,
//     } : Value<RecordType> & ValidatorContainer<ValidatorType>
// ) : MapInterface<RecordType, Return<ValidatorType>> {
//
//     return RecordValueParameter(value, validator);
// }
