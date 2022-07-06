import Value from '@alirya/value/value.js';
import InferValue from '@alirya/value/value/infer.js';

type Infer<Schema extends Record<PropertyKey, Value>> = {
    [Key in keyof Schema] : InferValue<Schema[Key]>
};


export default Infer;
