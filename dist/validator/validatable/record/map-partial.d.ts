import RecordParameter from "../../base/record/infer";
import Validator from "@dikac/t-validator/validator";
import InferReturn from "./infer";
import Value from "@dikac/t-value/value";
import ValidatorsContainer from "../../validators/validators";
export default MapPartial;
declare namespace MapPartial {
    const Parameter: typeof MapPartialParameter;
    const Object: typeof MapPartialObject;
}
export declare function MapPartialParameter<Validators extends Record<PropertyKey, Validator>>(value: RecordParameter<Validators>, validators: Validators, stop?: boolean): Partial<InferReturn<Validators>>;
export declare function MapPartialObject<Validators extends Record<PropertyKey, Validator>>({ value, validators, stop, }: Value<RecordParameter<Validators>> & ValidatorsContainer<Validators> & {
    stop?: boolean;
}): Partial<InferReturn<Validators>>;
