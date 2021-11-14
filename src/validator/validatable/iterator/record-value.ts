import RecordValueParameters from "./record-value-parameters";
import {RecordValueParameter} from "./record-value-parameter";

namespace RecordValue {

    export const Parameters = RecordValueParameters;
    export const Parameter = RecordValueParameter;
    // export type Argument<
    //     RecordType extends Record<PropertyKey, any>,
    //     ValidatorType extends Validator<O.UnionOf<RecordType>>
    // > = RecordValueArgument<
    //     RecordType,
    //     ValidatorType
    // >;
}
export default RecordValue;
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
//
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
