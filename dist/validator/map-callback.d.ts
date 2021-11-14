import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/dynamic";
import MapCallbackParameter, { MapCallbackArgument } from "./map-callback-parameter";
import MapCallbackParameters from "./map-callback-parameters";
declare namespace MapCallback {
    const Parameter: typeof MapCallbackParameter;
    const Parameters: typeof MapCallbackParameters;
    type Argument<Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>, ValidatableType extends Validatable = Validatable, MessageType = unknown> = MapCallbackArgument<Validators, Result, ValidatableType, MessageType>;
}
export default MapCallback;
