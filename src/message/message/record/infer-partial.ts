import Message from '@alirya/message/message';
import InferMessage from '@alirya/message/message/infer';

type InferPartial<Schema extends Partial<Record<PropertyKey, Message>>> = {
    [Key in keyof Schema] : Schema[Key] extends Message ? InferMessage<Schema[Key]> : undefined
};

export default InferPartial;
