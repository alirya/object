import Validator from '@axiona/validator/validator.js';
import InferSubject from '@axiona/validator/subject/subject.js';

type Subject<Schema extends Record<PropertyKey, Validator>> = {
    [Key in keyof Schema] : InferSubject<Schema[Key]>
};

export default Subject;
