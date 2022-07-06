import ValidatableRecord from './infer.js';
import Validator from '@alirya/validator/validator.js';
import IteratorValue from '../iterator/value.js';
import ValidatorsContainer from '../../validators/validators.js';
import Value from '@alirya/value/value.js';

export function ValueParameters<
    ValueType,
    Validators extends Record<PropertyKey, Validator<ValueType>>,
>(
    value : ValueType,
    validators : Validators
) : ValidatableRecord<Validators> {

    let object  = {};

    for(const [key, validatable] of IteratorValue.Parameters(value, validators)) {

        object[<PropertyKey>key] = validatable;
    }

    return <ValidatableRecord<Validators>> object;
}

export function ValueParameter<
    ValueType,
    Validators extends Record<PropertyKey, Validator<ValueType>>,
>(
    {
        value,
        validators
    } : ValidatorsContainer<Validators> & Value<ValueType>
) : ValidatableRecord<Validators> {

    return ValueParameters(value, validators);
}


namespace Value {
    export const Parameters = ValueParameters;
    export const Parameter = ValueParameter;
}
export default Value;
