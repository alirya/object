import Validator from "@alirya/validator/validator";
import InferType from "@alirya/validator/subject/expectation";

type Expectation<Schema extends Record<PropertyKey, Validator>> = {
    [Key in keyof Schema] : InferType<Schema[Key]>
};

export default Expectation;
