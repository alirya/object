import RecordParameter from "../../base/record/infer";
import Validator from "@dikac/t-validator/validator";
import InferReturn from "./infer";
import Value from "@dikac/t-value/value";
import ValidatorsContainer from "../../validators/validators";
export default function MapPartial<Validators extends Record<PropertyKey, Validator>>({ value, validators, stop, }: Value<RecordParameter<Validators>> & ValidatorsContainer<Validators> & {
    stop?: boolean;
}): Partial<InferReturn<Validators>>;
