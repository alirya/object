import RecordKeyPartialParameters from "./record-key-partial-partials";
import RecordKeyPartialParameter from "./record-key-partial-partial";
var RecordKeyPartial;
(function (RecordKeyPartial) {
    RecordKeyPartial.Parameters = RecordKeyPartialParameters;
    RecordKeyPartial.Parameter = RecordKeyPartialParameter;
})(RecordKeyPartial || (RecordKeyPartial = {}));
export default RecordKeyPartial;
//
// export function RecordKeyPartialParameter<
//     RecordType extends Record<PropertyKey, any>,
//     ValidatorType extends Validator<keyof RecordType>,
// >(
//     value : RecordType,
//     validator : ValidatorType,
//     stop = false,
// ) : Partial<MapInterface<RecordType, Return<ValidatorType>>> {
//
//     let result = {};
//
//     for(const [key, validatable] of IteratorRecordKey.Parameter(value, validator)) {
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
// export function RecordKeyPartialObject<
//     RecordType extends Record<PropertyKey, any>,
//     ValidatorType extends Validator<keyof RecordType>,
// >(
//     {
//         value,
//         validator,
//         stop = false,
//     } : Value<RecordType> & ValidatorContainer<ValidatorType> & {stop ?: boolean}
// ) : Partial<MapInterface<RecordType, Return<ValidatorType>>> {
//
//     return RecordKeyPartialParameter(value, validator, stop);
// }
//# sourceMappingURL=record-key-partial.js.map