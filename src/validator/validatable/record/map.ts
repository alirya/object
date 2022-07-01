import RecordParameter from '../../subject/record/allow';
import Validator from '@alirya/validator/validator';
import InferReturn from './infer';
import IteratorMap from '../iterator/map';
import ValidatorsContainer from '../../validators/validators';
import Value from '@alirya/value/value';

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
