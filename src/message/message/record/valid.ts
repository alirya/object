import ValidatableValid from '../../../validatable/record/valid.js';
import Validatable from '@alirya/validatable/validatable.js';
import Message from '@alirya/message/message.js';
import RecordInfer from './infer.js';
import Map from './map.js';
import RemoveUndefined from '../../../omit-undefined.js';

export default function Valid<
    Instance extends Record<PropertyKey, Message & Validatable>
>(
    record : Instance
) : Partial<RecordInfer<Instance>> {

    return  Map(<Instance>RemoveUndefined(ValidatableValid(record)));
}
