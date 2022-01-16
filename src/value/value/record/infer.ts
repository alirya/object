import Value from '@alirya/value/value';
import InferValue from '@alirya/value/value/infer';

type Infer<Schema extends Record<PropertyKey, Value>> = {
    [Key in keyof Schema] : InferValue<Schema[Key]>
};


export default Infer;
