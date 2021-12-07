import Validator from "@dikac/t-validator/validator";
import InferArgument from "@dikac/t-validator/subject/allow";
declare type Allow<Schema extends Record<PropertyKey, Validator>> = {
    [Key in keyof Schema]: InferArgument<Schema[Key]>;
};
export default Allow;
