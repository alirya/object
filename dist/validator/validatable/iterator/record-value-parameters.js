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
export default function* RecordValueParameters(value, validator) {
    let result = {};
    for (const key in value) {
        yield [result[key], validator(value[key])];
    }
}
// export type RecordValueArgument<
//     RecordType extends Record<PropertyKey, any>,
//     ValidatorType extends Validator<O.UnionOf<RecordType>>
// > =
//     Value<RecordType> & ValidatorContainer<ValidatorType>
//
// export function * RecordValueObject<
//     RecordType extends Record<PropertyKey, any>,
//     ValidatorType extends Validator<O.UnionOf<RecordType>>,
// >(
// //    value : RecordType,
// //    validator : ValidatorType,
//     {
//         value,
//         validator,
//     } : Value<RecordType> & ValidatorContainer<ValidatorType>
// // ) : MapInterface<RecordType, Return<ValidatorType>> {
// ) : Iterable<[keyof RecordType, Return<ValidatorType>]> {
//
//     return RecordValueParameter(value, validator);
//
// }
//# sourceMappingURL=record-value-parameters.js.map