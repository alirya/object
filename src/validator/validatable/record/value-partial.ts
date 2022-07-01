import ValidatableRecord from './infer';
import Validator from '@alirya/validator/validator';
import IteratorValue from '../iterator/value';
import ValidatorsContainer from '../../validators/validators';
import Value from '@alirya/value/value';


export function ValuePartialParameters<
    ValueType,
    Validators extends Record<PropertyKey, Validator<ValueType>>,
>(
    value : ValueType,
    validators : Validators,
    stop : boolean = false,
) : Partial<ValidatableRecord<Validators>> {

    let object = {};

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
