import RecordParameter from "../../subject/record/allow";
import Validator from "@dikac/t-validator/validator";
import InferReturn from "./infer";
export default function MapPartialParameters<Validators extends Record<PropertyKey, Validator>>(value: RecordParameter<Validators>, validators: Validators, stop?: boolean): Partial<InferReturn<Validators>>;
