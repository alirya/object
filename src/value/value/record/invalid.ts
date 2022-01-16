import ValidatableInvalid from '../../../validatable/record/invalid';
import Validatable from '@alirya/validatable/validatable';
import Value from '@alirya/value/value';
import RecordInfer from './infer';
import Map from './map';
import RemoveUndefined from '../../../omit-undefined';


export default function Invalid<
    Instance extends Record<PropertyKey, Value & Validatable>
>(
    record : Instance
) : Partial<RecordInfer<Instance>> {

    return  Map(<Instance>RemoveUndefined(ValidatableInvalid(record)));
}
