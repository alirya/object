import RecordParameter from '../../subject/record/allow.js';
import Validator from '@alirya/validator/validator.js';
import InferReturn from './infer.js';
import IteratorMap from '../iterator/map.js';
import ValidatorsContainer from '../../validators/validators.js';
import Value from '@alirya/value/value.js';

export function MapParameters<
    Validators extends Record<PropertyKey, Validator>
>(
    value : RecordParameter<Validators>,
    validators : Validators,
) : InferReturn<Validators> {

    let object = {};

    for(let [property, validatable] of IteratorMap.Parameters(value, validators)) {

        object[<PropertyKey>property] = validatable;
    }

    return <InferReturn<Validators>> object;
}


export function MapParameter<
    Validators extends Record<PropertyKey, Validator>
>(
    {
        value,
        validators
    } : Value<RecordParameter<Validators>> & ValidatorsContainer<Validators>
) : InferReturn<Validators> {

    return MapParameters(value, validators);
}


namespace Map {
    export const Parameters = MapParameters;
    export const Parameter = MapParameter;
}
export default Map;
