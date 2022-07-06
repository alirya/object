import Validator from '@alirya/validator/validator.js';
import InferType from '@alirya/validator/subject/expectation.js';

type Expectation<Schema extends Record<PropertyKey, Validator>> = {
    [Key in keyof Schema] : InferType<Schema[Key]>
};

export default Expectation;
