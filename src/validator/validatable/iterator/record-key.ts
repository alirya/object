import Validator from '@axiona/validator/validator.js';
import Return from '@axiona/validator/validatable/infer-static.js';
import Value from '@axiona/value/value.js';
import ValidatorContainer from '@axiona/validator/validator/validator.js';

export function * RecordKeyParameters<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<keyof RecordType>,
>(
    value : RecordType,
    validator : ValidatorType,
) : Iterable<[keyof RecordType, Return<ValidatorType>]>  {

    for(const key in value) {

        yield [key, validator(key) as Return<ValidatorType>];
    }
}


export function * RecordKeyParameter<
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


namespace RecordKey {
    export const Parameters = RecordKeyParameters;
    export const Parameter = RecordKeyParameter;
}
export default RecordKey;
