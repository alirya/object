import Validator from "@dikac/t-validator/validator";
import InferType from "@dikac/t-validator/subject/expectation";

type Expectation<Schema extends Record<PropertyKey, Validator>> = {
    [Key in keyof Schema] : InferType<Schema[Key]>
};

export default Expectation;
