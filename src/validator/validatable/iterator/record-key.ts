import Validator from '@alirya/validator/validator';
import Return from '@alirya/validator/validatable/infer-static';
import Value from '@alirya/value/value';
import ValidatorContainer from '@alirya/validator/validator/validator';

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
