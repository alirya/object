import ValidatableValid from '../../../validatable/record/valid';
import Validatable from '@alirya/validatable/validatable';
import Value from '@alirya/value/value';
import RecordInfer from './infer';
import Map from './map';
import RemoveUndefined from '../../../omit-undefined';

export default function Valid<
    Instance extends Record<PropertyKey, Value & Validatable>
>(
    record : Instance
) : Partial<RecordInfer<Instance>> {

    return  Map(<Instance>RemoveUndefined(ValidatableValid(record)));
}
