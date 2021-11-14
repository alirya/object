import RecordValueParameters from "./record-value-parameters";
//
// export default RecordValue;
// namespace RecordValue {
//     export const Parameter = RecordValueParameter;
//     export const Object = RecordValueObject;
// }
//
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
export default function RecordValueParameter(
// value : RecordType,
// validator : ValidatorType,
{ value, validator, }) {
    return RecordValueParameters(value, validator);
}
//# sourceMappingURL=record-value-parameter.js.map