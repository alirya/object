import Validator from '@alirya/validator/validator';
import InferSubject from '@alirya/validator/subject/subject';

type Subject<Schema extends Record<PropertyKey, Validator>> = {
    [Key in keyof Schema] : InferSubject<Schema[Key]>
};

export default Subject;
