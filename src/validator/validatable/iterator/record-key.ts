import Validator from "@dikac/t-validator/validator";
import MapInterface from "../../../map";
import Return from "@dikac/t-validator/validatable/infer-unambiguous";
import Value from "@dikac/t-value/value";
import ValidatorContainer from "@dikac/t-validator/validator/validator";

export default function * RecordKey<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<keyof RecordType>,
>(
    // object : RecordType,
    // value : ValidatorType,
    {
        value,
        validator
    } : Value<RecordType> & ValidatorContainer<ValidatorType>
// ) : MapInterface<RecordType, Return<ValidatorType>>  {
) : Iterable<[keyof RecordType, Return<ValidatorType>]>  {

    for(const key in value) {

        yield [key, validator(key) as Return<ValidatorType>]
    }
}
