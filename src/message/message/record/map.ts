import Message from '@alirya/message/message.js';
import RecordInfer from './infer.js';
import RecordInferPartial from './infer-partial.js';
import MapCallbackGuard from '../../../map-callback.js';
import ValueMessage from '@alirya/message/message/value.js';

export default function Map<
    Instance extends Record<PropertyKey, Message> = Record<PropertyKey, Message>
>(record : Instance) : RecordInfer<Instance>;

export default function Map<
    Instance extends Partial<Record<PropertyKey, Message>> = Partial<Record<PropertyKey, Message>>,
>(record : Instance) : RecordInferPartial<Instance>;

export default function Map<
    Instance extends Record<PropertyKey, Message> = Record<PropertyKey, Message>
>(record : Instance) : RecordInfer<Instance> {

    return <RecordInfer<Instance>> MapCallbackGuard(record, ValueMessage);
}
