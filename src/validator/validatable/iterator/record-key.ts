import RecordKeyParameter from "./record-key-parameter";
import RecordKeyParameters from "./record-key-parameters";

namespace RecordKey {

    export const Parameter = RecordKeyParameter;
    export const Parameters = RecordKeyParameters;
    // export type Argument<
    //     RecordType extends Record<PropertyKey, any>,
    //     ValidatorType extends Validator<keyof RecordType>,
    // > = RecordKeyArgument<
    //     RecordType,
    //     ValidatorType
    // >;
}
export default RecordKey;
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
//
// export type RecordKeyArgument<
//     RecordType extends Record<PropertyKey, any>,
//     ValidatorType extends Validator<keyof RecordType>,
// > = Value<RecordType> & ValidatorContainer<ValidatorType>
//
// export function * RecordKeyObject<
//     RecordType extends Record<PropertyKey, any>,
//     ValidatorType extends Validator<keyof RecordType>,
// >(
//     // object : RecordType,
//     // value : ValidatorType,
//     {
//         value,
//         validator
//     } : Value<RecordType> & ValidatorContainer<ValidatorType>
// // ) : RecordKeyInterface<RecordType, Return<ValidatorType>>  {
// ) : Iterable<[keyof RecordType, Return<ValidatorType>]>  {
//
//     return RecordKeyParameter(value, validator);
// }
