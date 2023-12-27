import ValidatableRecord from './infer.js';
import Validator from '@axiona/validator/validator.js';
import IteratorValue from '../iterator/value.js';
import ValidatorsContainer from '../../validators/validators.js';
import Value from '@axiona/value/value.js';


export function ValuePartialParameters<
    ValueType,
    Validators extends Record<PropertyKey, Validator<ValueType>>,
>(
    value : ValueType,
    validators : Validators,
    stop  = false,
) : Partial<ValidatableRecord<Validators>> {

    const object = {};

    for(const [key, validatable] of IteratorValue.Parameters(value, validators)) {

        object[<PropertyKey>key] = validatable;

        if(validatable.valid === stop) {

            return object;
        }
    }

    return <ValidatableRecord<Validators>> object;
}


export function ValuePartialParameter<
    ValueType,
    Validators extends Record<PropertyKey, Validator<ValueType>>,
>(
    {
        value,
        validators,
        stop = false,
    } : Value<ValueType> & ValidatorsContainer<Validators> & {stop ?: boolean}
) : Partial<ValidatableRecord<Validators>> {

    return ValuePartialParameters(value, validators, stop);
}


namespace ValuePartial {
    export const Parameters = ValuePartialParameters;
    export const Parameter = ValuePartialParameter;
}
export default ValuePartial;
