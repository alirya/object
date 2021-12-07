import Validator from "@dikac/t-validator/validator";
import Return from "@dikac/t-validator/validatable/infer-static";
import Value from "@dikac/t-value/value";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import RecordKeyParameters from "./record-key-parameters";

export default function * RecordKeyParameter<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<keyof RecordType>,
>(
    {
        value,
        validator
    } : Value<RecordType> & ValidatorContainer<ValidatorType>
) : Iterable<[keyof RecordType, Return<ValidatorType>]>  {

    return RecordKeyParameters(value, validator);
}
