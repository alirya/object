import Validator from '@alirya/validator/validator';
import Return from '@alirya/validator/validatable/infer-static';
import Value from '@alirya/value/value';
import ValidatorContainer from '@alirya/validator/validator/validator';
import RecordKeyParameters from './record-key-parameters';

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
