import Message from '@alirya/message/message.js';
import InferMessage from '@alirya/message/message/infer.js';

type Infer<Schema extends Record<PropertyKey, Message>> = {
    [Key in keyof Schema] : InferMessage<Schema[Key]>
};


export default Infer;
