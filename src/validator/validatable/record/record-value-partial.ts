import RecordValuePartialParameters from "./record-value-partial-parameters";
import RecordValuePartialParameter from "./record-value-partial-parameter";

namespace RecordValuePartial {

    export const Parameters = RecordValuePartialParameters;
    export const Parameter = RecordValuePartialParameter;
}
export default RecordValuePartial;
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
//
// export function RecordValuePartialObject<
//     RecordType extends Record<PropertyKey, any>,
//     ValidatorType extends Validator<O.UnionOf<RecordType>>,
// >(
//     // value : RecordType,
//     // validator : ValidatorType,
//     {
//         value,
//         validator,
//         stop,
//     } : Value<RecordType> & ValidatorContainer<ValidatorType> & {stop ?: boolean}
// ) : Partial<MapInterface<RecordType, Return<ValidatorType>>> {
//
//     return RecordValuePartialParameter(value, validator, stop);
// }
