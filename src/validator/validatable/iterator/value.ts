import Validator from '@alirya/validator/validator';
import InferReturn from '@alirya/validator/validatable/infer-static';
import ValidatorsContainer from '../../validators/validators';
import Value from '@alirya/value/value';

export function * ValueParameters<
    ValueType,
    Validators extends Record<PropertyKey, Validator<ValueType>>,
>(
    value : ValueType,
    validators : Validators,
) : Iterable<[keyof Validators, InferReturn<Validators[keyof Validators]>]> {

    for(let property in validators) {

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

    let object  = {};

    for(let property in validators) {

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
