import Validator from "@dikac/t-validator/validator";
import MapInterface from "../../../map";
import InferType from "@dikac/t-validator/expectation/infer";
import {O} from "ts-toolbelt";
import Return from "@dikac/t-validator/validatable/infer-unambiguous";
import Value from "@dikac/t-value/value";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import IteratorRecordValue from "../iterator/record-value";

export default function RecordValue<
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

    let result = {};

    for(const [key, validatable] of IteratorRecordValue({value, validator})) {

        result[key as PropertyKey] = validatable;
    }

    return <MapInterface<RecordType, Return<ValidatorType>>> result;
}
