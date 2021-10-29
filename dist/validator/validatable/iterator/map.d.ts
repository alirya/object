import RecordParameter from "../../base/record/infer";
import ValidatorsContainer from "../../validators/validators";
import Validator from "@dikac/t-validator/validator";
import Value from "@dikac/t-value/value";
import InferReturn from "@dikac/t-validator/validatable/infer-unambiguous";
export default Map;
declare namespace Map {
    const Parameter: typeof MapParameter;
    const Object: typeof MapObject;
    type Argument<Validators extends Record<PropertyKey, Validator>> = MapArgument<Validators>;
}
export declare function MapParameter<Validators extends Record<PropertyKey, Validator>>(value: RecordParameter<Validators>, validators: Validators): Iterable<[keyof Validators, InferReturn<Validators[keyof Validators]>]>;
export declare type MapArgument<Validators extends Record<PropertyKey, Validator>> = Value<RecordParameter<Validators>> & ValidatorsContainer<Validators>;
export declare function MapObject<Validators extends Record<PropertyKey, Validator>>({ value, validators }: Value<RecordParameter<Validators>> & ValidatorsContainer<Validators>): Iterable<[keyof Validators, InferReturn<Validators[keyof Validators]>]>;
