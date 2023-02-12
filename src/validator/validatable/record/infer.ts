import Validator from '@alirya/validator/validator.js';
import InferReturn from '@alirya/validator/validatable/infer-static.js';

type Infer<Schema extends Record<PropertyKey, Validator>> = {
    [Key in keyof Schema]  : InferReturn<Schema[Key]>
};

export default Infer;

