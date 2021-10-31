import Validator from "@dikac/t-validator/validator";
import MapInterface from "../../../map";
import InferType from "@dikac/t-validator/expectation/infer";
import {O} from "ts-toolbelt";
import Return from "@dikac/t-validator/validatable/infer-unambiguous";
import Value from "@dikac/t-value/value";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import IteratorRecordValue from "../iterator/record-value";
import {ValueObject, ValueParameter} from "./value";

export default RecordValuePartial;
namespace RecordValuePartial {

    export const Parameter = RecordValuePartialParameter;
    export const Object = RecordValuePartialObject;
}

export function RecordValuePartialParameter<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<O.UnionOf<RecordType>>,
>(
     value : RecordType,
     validator : ValidatorType,
     stop = false,
    // {
    //     value,
    //     validator,
    //     stop = false,
    // } : Value<RecordType> & ValidatorContainer<ValidatorType> & {stop ?: boolean}
) : Partial<MapInterface<RecordType, Return<ValidatorType>>> {

    let result = {};

    for(const [key, validatable] of IteratorRecordValue.Parameter(value, validator)) {

        result[key as PropertyKey] = validatable;

        if(validatable.valid === stop) {

            return result;
        }
    }

    return result;
}

export function RecordValuePartialObject<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<O.UnionOf<RecordType>>,
>(
    // value : RecordType,
    // validator : ValidatorType,
    {
        value,
        validator,
        stop,
    } : Value<RecordType> & ValidatorContainer<ValidatorType> & {stop ?: boolean}
) : Partial<MapInterface<RecordType, Return<ValidatorType>>> {

    return RecordValuePartialParameter(value, validator, stop);
}
