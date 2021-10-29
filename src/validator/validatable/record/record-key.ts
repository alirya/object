import Validator from "@dikac/t-validator/validator";
import MapInterface from "../../../map";
import Return from "@dikac/t-validator/validatable/infer-unambiguous";
import IteratorRecordKey from "../iterator/record-key";
import Value from "@dikac/t-value/value";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import {RecordKeyPartialObject, RecordKeyPartialParameter} from "./record-key-partial";

export default RecordKey;
namespace RecordKey {
    export const Parameter = RecordKeyParameter;
    export const Object = RecordKeyObject;
}

export function RecordKeyParameter<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<keyof RecordType>,
>(
    value : RecordType,
    validator : ValidatorType
) : MapInterface<RecordType, Return<ValidatorType>>  {

    let result = {};

    for(const [key, validatable] of IteratorRecordKey({value, validator})) {

        result[key as PropertyKey] = validatable
    }

    return <MapInterface<RecordType, Return<Value>>> result;
}

export function RecordKeyObject<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<keyof RecordType>,
>(
    {
        value,
        validator
    } : Value<RecordType> & ValidatorContainer<ValidatorType>
) : MapInterface<RecordType, Return<ValidatorType>>  {

    let result = {};

    for(const [key, validatable] of IteratorRecordKey({value, validator})) {

        result[key as PropertyKey] = validatable
    }

    return <MapInterface<RecordType, Return<Value>>> result;
}
