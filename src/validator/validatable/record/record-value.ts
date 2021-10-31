import Validator from "@dikac/t-validator/validator";
import MapInterface from "../../../map";
import InferType from "@dikac/t-validator/expectation/infer";
import {O} from "ts-toolbelt";
import Return from "@dikac/t-validator/validatable/infer-unambiguous";
import Value from "@dikac/t-value/value";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import IteratorRecordValue from "../iterator/record-value";
import {RecordValuePartialObject, RecordValuePartialParameter} from "./record-value-partial";

export default RecordValue;
namespace RecordValue {
    export const Parameter = RecordValueParameter;
    export const Object = RecordValueObject;
}


export function RecordValueParameter<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<O.UnionOf<RecordType>>,
>(
    value : RecordType,
    validator : ValidatorType,
    // {
    //     value,
    //     validator,
    // } : Value<RecordType> & ValidatorContainer<ValidatorType>
) : MapInterface<RecordType, Return<ValidatorType>> {

    let result = {};

    for(const [key, validatable] of IteratorRecordValue.Parameter(value, validator)) {

        result[key as PropertyKey] = validatable;
    }

    return <MapInterface<RecordType, Return<ValidatorType>>> result;
}

export function RecordValueObject<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<O.UnionOf<RecordType>>,
>(
    // value : RecordType,
    // validator : ValidatorType,
    {
        value,
        validator,
    } : Value<RecordType> & ValidatorContainer<ValidatorType>
) : MapInterface<RecordType, Return<ValidatorType>> {

    return RecordValueParameter(value, validator);
}
