import Validator from "@dikac/t-validator/validator";
import InferArgument from "@dikac/t-validator/parameter/base/infer";

type Infer<Schema extends globalThis.Record<PropertyKey, Validator>> = {
    [Key in keyof Schema] : InferArgument<Schema[Key]>
};


export default Infer;
