import Value from '@axiona/value/value.js';
import InferValue from '@axiona/value/value/infer.js';

type Infer<Schema extends Record<PropertyKey, Value>> = {
    [Key in keyof Schema] : InferValue<Schema[Key]>
};


export default Infer;
