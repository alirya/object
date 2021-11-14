import IteratorRecordValue from "../iterator/record-value";
//
// export default RecordValue;
// namespace RecordValue {
//     export const Parameter = RecordValueParameter;
//     export const Object = RecordValueObject;
// }
export default function RecordValueParameters(value, validator) {
    let result = {};
    for (const [key, validatable] of IteratorRecordValue.Parameters(value, validator)) {
        result[key] = validatable;
    }
    return result;
}
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
//# sourceMappingURL=record-value-parameters.js.map