import Validator from '@alirya/validator/validator.js';
import InferSubject from '@alirya/validator/subject/subject.js';

type Subject<Schema extends Record<PropertyKey, Validator>> = {
    [Key in keyof Schema] : InferSubject<Schema[Key]>
};

export default Subject;
