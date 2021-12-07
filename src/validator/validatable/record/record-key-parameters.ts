import Validator from "@dikac/t-validator/validator";
import MapInterface from "../../../map";
import Return from "@dikac/t-validator/validatable/infer-static";
import IteratorRecordKey from "../iterator/record-key-parameters";
import Value from "@dikac/t-value/value";

// export default RecordKey;
// namespace RecordKey {
//     export const Parameter = RecordKeyParameter;
//     export const Object = RecordKeyObject;
// }

export default function RecordKeyParameters<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<keyof RecordType>,
>(
    value : RecordType,
    validator : ValidatorType
) : MapInterface<RecordType, Return<ValidatorType>>  {

    let result = {};

    for(const [key, validatable] of IteratorRecordKey(value, validator)) {

        result[key as PropertyKey] = validatable
    }

    return <MapInterface<RecordType, Return<Value>>> result;
}
//
// export function RecordKeyObject<
//     RecordType extends Record<PropertyKey, any>,
//     ValidatorType extends Validator<keyof RecordType>,
// >(
//     {
//         value,
//         validator
//     } : Value<RecordType> & ValidatorContainer<ValidatorType>
// ) : MapInterface<RecordType, Return<ValidatorType>>  {
//
//     return RecordKeyParameter(value, validator);
// }
