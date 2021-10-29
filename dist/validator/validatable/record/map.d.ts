import RecordParameter from "../../base/record/infer";
import ValidatorsContainer from "../../validators/validators";
import Validator from "@dikac/t-validator/validator";
import InferReturn from "./infer";
import Value from "@dikac/t-value/value";
export default Map;
declare namespace Map {
    const Parameter: typeof MapParameter;
    const Object: typeof MapObject;
}
export declare function MapParameter<Validators extends Record<PropertyKey, Validator>>(value: RecordParameter<Validators>, validators: Validators): InferReturn<Validators>;
export declare function MapObject<Validators extends Record<PropertyKey, Validator>>({ value, validators }: Value<RecordParameter<Validators>> & ValidatorsContainer<Validators>): InferReturn<Validators>;
