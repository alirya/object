import RecordValuePartialParameters from "./record-value-partial-parameters";
//
// export default RecordValuePartial;
// namespace RecordValuePartial {
//
//     export const Parameter = RecordValuePartialParameter;
//     export const Object = RecordValuePartialObject;
// }
//
// export function RecordValuePartialParameter<
//     RecordType extends Record<PropertyKey, any>,
//     ValidatorType extends Validator<O.UnionOf<RecordType>>,
// >(
//      value : RecordType,
//      validator : ValidatorType,
//      stop = false,
//     // {
//     //     value,
//     //     validator,
//     //     stop = false,
//     // } : Value<RecordType> & ValidatorContainer<ValidatorType> & {stop ?: boolean}
// ) : Partial<MapInterface<RecordType, Return<ValidatorType>>> {
//
//     let result = {};
//
//     for(const [key, validatable] of IteratorRecordValue.Parameter(value, validator)) {
//
//         result[key as PropertyKey] = validatable;
//
//         if(validatable.valid === stop) {
//
//             return result;
//         }
//     }
//
//     return result;
// }
export default function RecordValuePartialParameter(
// value : RecordType,
// validator : ValidatorType,
{ value, validator, stop, }) {
    return RecordValuePartialParameters(value, validator, stop);
}
//# sourceMappingURL=record-value-partial-parameter.js.map