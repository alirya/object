import Validator from '@alirya/validator/validator';
import {O} from 'ts-toolbelt';
import Return from '@alirya/validator/validatable/infer-static';
import Value from '@alirya/value/value';
import ValidatorContainer from '@alirya/validator/validator/validator';
import RecordValueParameters from './record-value-parameters';

export function * RecordValueParameter<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<O.UnionOf<RecordType>>,
>(
    {
        value,
        validator,
    } : Value<RecordType> & ValidatorContainer<ValidatorType>
) : Iterable<[keyof RecordType, Return<ValidatorType>]> {

    return RecordValueParameters(value, validator);

}
