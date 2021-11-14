import RecordParameter from "../../base/record/infer";
import ValidatorsContainer from "../../validators/validators";
import Validator from "@dikac/t-validator/validator";
import InferReturn from "./infer";
import Value from "@dikac/t-value/value";
export default function MapParameter<Validators extends Record<PropertyKey, Validator>>({ value, validators }: Value<RecordParameter<Validators>> & ValidatorsContainer<Validators>): InferReturn<Validators>;
