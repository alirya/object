import Validator from "@dikac/t-validator/validator";
import Return from "@dikac/t-validator/validatable/infer-static";

export default function * RecordKeyParameters<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<keyof RecordType>,
>(
    value : RecordType,
    validator : ValidatorType,
) : Iterable<[keyof RecordType, Return<ValidatorType>]>  {

    for(const key in value) {

        yield [key, validator(key) as Return<ValidatorType>]
    }
}
