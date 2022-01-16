import RecordParameter from '../../subject/record/allow';
import Validator from '@alirya/validator/validator';
import InferReturn from './infer';
import IteratorMap from '../iterator/map-parameters';

export default function MapParameters<
    Validators extends Record<PropertyKey, Validator>
>(
    value : RecordParameter<Validators>,
    validators : Validators,
) : InferReturn<Validators> {

    let object = {};

    for(let [property, validatable] of IteratorMap(value, validators)) {

        object[<PropertyKey>property] = validatable;
    }

    return <InferReturn<Validators>> object;
}
