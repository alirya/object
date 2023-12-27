import ValidatableInvalid from '../../../validatable/record/invalid.js';
import Validatable from '@axiona/validatable/validatable.js';
import Value from '@axiona/value/value.js';
import RecordInfer from './infer.js';
import Map from './map.js';
import RemoveUndefined from '../../../omit-undefined.js';


export default function Invalid<
    Instance extends Record<PropertyKey, Value & Validatable>
>(
    record : Instance
) : Partial<RecordInfer<Instance>> {

    return  Map(<Instance>RemoveUndefined(ValidatableInvalid(record)));
}
