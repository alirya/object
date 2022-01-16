import ValidatableRecord from './infer';
import Validator from '@alirya/validator/validator';
import IteratorValue from '../iterator/value-parameters';

export default function ValueParameters<
    ValueType,
    Validators extends Record<PropertyKey, Validator<ValueType>>,
>(
    value : ValueType,
    validators : Validators
) : ValidatableRecord<Validators> {

    let object  = {};

    for(const [key, validatable] of IteratorValue(value, validators)) {

        object[<PropertyKey>key] = validatable;
    }

    return <ValidatableRecord<Validators>> object;
}

