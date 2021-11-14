import Validator from "@dikac/t-validator/validator";
import MapInterface from "../../../map";
import Return from "@dikac/t-validator/validatable/infer-static";
import Value from "@dikac/t-value/value";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import RecordKeyParameters from "./record-key-parameters";
//
// export default RecordKey;
// namespace RecordKey {
//     export const Parameter = RecordKeyParameter;
//     export const Object = RecordKeyObject;
// }
//
// export function RecordKeyParameter<
//     RecordType extends Record<PropertyKey, any>,
//     ValidatorType extends Validator<keyof RecordType>,
// >(
//     value : RecordType,
//     validator : ValidatorType
// ) : MapInterface<RecordType, Return<ValidatorType>>  {
//
//     let result = {};
//
//     for(const [key, validatable] of IteratorRecordKey.Parameter(value, validator)) {
//
//         result[key as PropertyKey] = validatable
//     }
//
//     return <MapInterface<RecordType, Return<Value>>> result;
// }

export default function RecordKeyParameter<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<keyof RecordType>,
>(
    {
        value,
        validator
    } : Value<RecordType> & ValidatorContainer<ValidatorType>
) : MapInterface<RecordType, Return<ValidatorType>>  {

    return RecordKeyParameters(value, validator);
}
