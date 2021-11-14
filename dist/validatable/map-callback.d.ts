import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordBase from "../validator/base/record/infer";
import Instance from "@dikac/t-validator/validatable/dynamic";
import MapCallbackParameters from "./map-callback-parameters";
import MapCallbackParameter, { MapCallbackArgument } from "./map-callback-parameter";
declare namespace MapCallback {
    const Parameters: typeof MapCallbackParameters;
    const Parameter: typeof MapCallbackParameter;
    type Argument<MessageType = unknown, ValidatorsType extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>, ValidatableType extends Validatable = Validatable, ValueType extends RecordBase<ValidatorsType> = RecordBase<ValidatorsType>> = MapCallbackArgument<MessageType, ValidatorsType, Result, ValidatableType, ValueType>;
}
export default MapCallback;
