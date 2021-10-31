import Validator from "@dikac/t-validator/validator";
import MapInterface from "../../../map";
import Return from "@dikac/t-validator/validatable/infer-unambiguous";
import Value from "@dikac/t-value/value";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import IteratorRecordKey from "../iterator/record-key";
import {RecordValueObject, RecordValueParameter} from "./record-value";

export default RecordKeyPartial;
namespace RecordKeyPartial {
    export const Parameter = RecordKeyPartialParameter;
    export const Object = RecordKeyPartialObject;
}

export function RecordKeyPartialParameter<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<keyof RecordType>,
>(
    value : RecordType,
    validator : ValidatorType,
    stop = false,
) : Partial<MapInterface<RecordType, Return<ValidatorType>>> {

    let result = {};

    for(const [key, validatable] of IteratorRecordKey.Parameter(value, validator)) {

        result[key as PropertyKey] = validatable;

        if(validatable.valid === stop) {

            return result;
        }
    }

    return result;
}

export function RecordKeyPartialObject<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<keyof RecordType>,
>(
    {
        value,
        validator,
        stop = false,
    } : Value<RecordType> & ValidatorContainer<ValidatorType> & {stop ?: boolean}
) : Partial<MapInterface<RecordType, Return<ValidatorType>>> {

    return RecordKeyPartialParameter(value, validator, stop);
}
