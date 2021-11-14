import RecordParameter from "../../base/record/infer";
import ValidatorsContainer from "../../validators/validators";
import Validator from "@dikac/t-validator/validator";
import Value from "@dikac/t-value/value";
import InferReturn from "@dikac/t-validator/validatable/infer-static";
export default function MapParameter<Validators extends Record<PropertyKey, Validator>>({ value, validators }: Value<RecordParameter<Validators>> & ValidatorsContainer<Validators>): Iterable<[keyof Validators, InferReturn<Validators[keyof Validators]>]>;
