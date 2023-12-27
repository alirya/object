import Validator from '@axiona/validator/validator.js';
import InferReturn from '@axiona/validator/validatable/infer-static.js';
import ValidatorsContainer from '../../validators/validators.js';
import Value from '@axiona/value/value.js';

export function * ValueParameters<
    ValueType,
    Validators extends Record<PropertyKey, Validator<ValueType>>,
>(
    value : ValueType,
    validators : Validators,
) : Iterable<[keyof Validators, InferReturn<Validators[keyof Validators]>]> {

    for(const property in validators) {

        const validator = validators[property];

        yield [
            <PropertyKey>property,
            validator(value) as InferReturn<Validators[keyof Validators]>
        ];
    }
}



export function * ValueParameter<
    ValueType,
    Validators extends Record<PropertyKey, Validator<ValueType>>,
>(
    {
        value,
        validators
    } : ValidatorsContainer<Validators> & Value<ValueType>
) : Iterable<[keyof Validators, InferReturn<Validators[keyof Validators]>]> {

    const object  = {};

    for(const property in validators) {

        const validator = validators[property];

        yield [
            object[<PropertyKey>property],
            validator(value) as InferReturn<Validators[keyof Validators]>
        ];
    }
}


namespace Value {
    export const Parameters = ValueParameters;
    export const Parameter = ValueParameter;
}
export default Value;
