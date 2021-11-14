import IteratorRecordKey from "../iterator/record-key";
// export default RecordKeyPartial;
// namespace RecordKeyPartial {
//     export const Parameter = RecordKeyPartialParameter;
//     export const Object = RecordKeyPartialObject;
// }
export default function RecordKeyPartialParameters(value, validator, stop = false) {
    let result = {};
    for (const [key, validatable] of IteratorRecordKey.Parameters(value, validator)) {
        result[key] = validatable;
        if (validatable.valid === stop) {
            return result;
        }
    }
    return result;
}
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
//# sourceMappingURL=record-key-partial-partials.js.map