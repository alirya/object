import Value from '@alirya/value/value.js';
import RecordInfer from './infer.js';
import MapCallbackGuard from '../../../map-callback.js';
import ValueValue from '@alirya/value/value/value.js';

export default function Map<
    Instance extends Record<PropertyKey, Value>
>(
    record : Instance
) : RecordInfer<Instance> {

    return <RecordInfer<Instance>> MapCallbackGuard(record, ValueValue);
}
