import Message from '@axiona/message/message.js';
import InferMessage from '@axiona/message/message/infer.js';

type InferPartial<Schema extends Partial<Record<PropertyKey, Message>>> = {
    [Key in keyof Schema] : Schema[Key] extends Message ? InferMessage<Schema[Key]> : undefined
};

export default InferPartial;
