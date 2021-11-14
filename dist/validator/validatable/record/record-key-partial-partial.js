import RecordKeyPartialParameters from "./record-key-partial-partials";
//
// export default RecordKeyPartial;
// namespace RecordKeyPartial {
//     export const Parameter = RecordKeyPartialParameter;
//     export const Object = RecordKeyPartialObject;
// }
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
export default function RecordKeyPartialParameter({ value, validator, stop = false, }) {
    return RecordKeyPartialParameters(value, validator, stop);
}
//# sourceMappingURL=record-key-partial-partial.js.map