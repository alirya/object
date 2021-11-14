import RecordParameter from "../../base/record/infer";
import Validator from "@dikac/t-validator/validator";
import InferReturn from "./infer";
export default function MapParameters<Validators extends Record<PropertyKey, Validator>>(value: RecordParameter<Validators>, validators: Validators): InferReturn<Validators>;
