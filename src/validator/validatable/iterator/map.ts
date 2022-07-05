import RecordParameter from '../../subject/record/allow';
import Validator from '@alirya/validator/validator';
import InferReturn from '@alirya/validator/validatable/infer-static';
import ValidatorsContainer from '../../validators/validators';
import Value from '@alirya/value/value';

export function * MapParameters<
    Validators extends Record<PropertyKey, Validator>
>(
    value : RecordParameter<Validators>,
    validators : Validators,
) : Iterable<[keyof Validators, InferReturn<Validators[keyof Validators]>]> {

    for(let property in validators) {

        const validator = validators[property];
        const val = value[property];

        yield [property, validator(val) as InferReturn<Validators[keyof Validators]>];
    }
}


export function * MapParameter<
    Validators extends Record<PropertyKey, Validator>
>(
    {
        value,
        validators
    } : Value<RecordParameter<Validators>> & ValidatorsContainer<Validators>
) : Iterable<[keyof Validators, InferReturn<Validators[keyof Validators]>]> {

    return MapParameters(value, validators);
}


namespace Map {
    export const Parameters = MapParameters;
    export const Parameter = MapParameter;
}
export default Map;
