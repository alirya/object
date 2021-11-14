import RecordValueParameters from "./record-value-parameters";
//
// export default RecordValue;
// namespace RecordValue {
//
//     export const Parameter = RecordValueParameter;
//     export const Object = RecordValueObject;
//     export type Argument<
//         RecordType extends Record<PropertyKey, any>,
//         ValidatorType extends Validator<O.UnionOf<RecordType>>
//     > = RecordValueArgument<
//         RecordType,
//         ValidatorType
//     >;
// }
//
// export function * RecordValueParameter<
//     RecordType extends Record<PropertyKey, any>,
//     ValidatorType extends Validator<O.UnionOf<RecordType>>,
// >(
//     value : RecordType,
//     validator : ValidatorType,
//     // {
//     //     value,
//     //     validator,
//     // } : Value<RecordType> & ValidatorContainer<ValidatorType>
// // ) : MapInterface<RecordType, Return<ValidatorType>> {
// ) : Iterable<[keyof RecordType, Return<ValidatorType>]> {
//
//     let result = {};
//
//     for(const key in value) {
//
//         yield [result[key as PropertyKey], validator(value[key]) as Return<ValidatorType>];
//     }
//
// }
// export type RecordValueArgument<
//     RecordType extends Record<PropertyKey, any>,
//     ValidatorType extends Validator<O.UnionOf<RecordType>>
// > =
//     Value<RecordType> & ValidatorContainer<ValidatorType>
export function* RecordValueParameter(
//    value : RecordType,
//    validator : ValidatorType,
{ value, validator, }
// ) : MapInterface<RecordType, Return<ValidatorType>> {
) {
    return RecordValueParameters(value, validator);
}
//# sourceMappingURL=record-value-parameter.js.map