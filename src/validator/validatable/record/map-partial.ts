import RecordParameter from '../../subject/record/allow.js';
import Validator from '@alirya/validator/validator.js';
import InferReturn from './infer.js';
import IteratorMap from '../iterator/map.js';
import Value from '@alirya/value/value.js';
import ValidatorsContainer from '../../validators/validators.js';

export function MapPartialParameters<
    Validators extends Record<PropertyKey, Validator>
>(
    value : RecordParameter<Validators>,
    validators : Validators,
    stop = false,
) : Partial<InferReturn<Validators>> {

    const object = {};

    for(const [property, validatable] of IteratorMap.Parameters(value, validators)) {

        object[<PropertyKey>property] = validatable;

        if(validatable.valid === stop) {

            return object;
        }
    }

    return object;
}


export function MapPartialParameter<
    Validators extends Record<PropertyKey, Validator>
>(
    {
        value,
        validators,
        stop = false,
    } : Value<RecordParameter<Validators>> & ValidatorsContainer<Validators> & {stop ?: boolean}
) : Partial<InferReturn<Validators>> {

    return MapPartialParameters(value, validators, stop);
}


namespace MapPartial {
    export const Parameters = MapPartialParameters;
    export const Parameter = MapPartialParameter;
}
export default MapPartial;
