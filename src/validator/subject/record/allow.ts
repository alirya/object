import Validator from '@alirya/validator/validator';
import InferArgument from '@alirya/validator/subject/allow';

type Allow<Schema extends Record<PropertyKey, Validator>> = {
    [Key in keyof Schema] : InferArgument<Schema[Key]>
};

export default Allow;
