import Validator from '@alirya/validator/validator.js';
import InferArgument from '@alirya/validator/subject/allow.js';

type Allow<Schema extends Record<PropertyKey, Validator>> = {
    [Key in keyof Schema] : InferArgument<Schema[Key]>
};

export default Allow;
