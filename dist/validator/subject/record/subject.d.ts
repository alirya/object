import Validator from "@dikac/t-validator/validator";
import InferSubject from "@dikac/t-validator/subject/subject";
declare type Subject<Schema extends Record<PropertyKey, Validator>> = {
    [Key in keyof Schema]: InferSubject<Schema[Key]>;
};
export default Subject;
