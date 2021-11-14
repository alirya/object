import RecordKeyParameters from "./record-key-parameters";
//
// export default RecordKey;
// namespace RecordKey {
//
//     export const Parameter = RecordKeyParameter;
//     export const Object = RecordKeyObject;
//     export type Argument<
//         RecordType extends Record<PropertyKey, any>,
//         ValidatorType extends Validator<keyof RecordType>,
//     > = RecordKeyArgument<
//         RecordType,
//         ValidatorType
//     >;
// }
//
// export function * RecordKeyParameter<
//     RecordType extends Record<PropertyKey, any>,
//     ValidatorType extends Validator<keyof RecordType>,
// >(
//     value : RecordType,
//     validator : ValidatorType,
//     // {
//     //     value,
//     //     validator
//     // } : Value<RecordType> & ValidatorContainer<ValidatorType>
// // ) : RecordKeyInterface<RecordType, Return<ValidatorType>>  {
// ) : Iterable<[keyof RecordType, Return<ValidatorType>]>  {
//
//     for(const key in value) {
//
//         yield [key, validator(key) as Return<ValidatorType>]
//     }
// }
// export type RecordKeyArgument<
//     RecordType extends Record<PropertyKey, any>,
//     ValidatorType extends Validator<keyof RecordType>,
// > = Value<RecordType> & ValidatorContainer<ValidatorType>
export default function* RecordKeyParameter(
// object : RecordType,
// value : ValidatorType,
{ value, validator }
// ) : RecordKeyInterface<RecordType, Return<ValidatorType>>  {
) {
    return RecordKeyParameters(value, validator);
}
//# sourceMappingURL=record-key-parameter.js.map