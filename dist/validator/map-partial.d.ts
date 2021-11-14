import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import MapPartialParameters from "./map-partial-parameters";
import MapPartialParameter, { MapPartialArgument } from "./map-partial-parameter";
declare namespace MapPartial {
    const Parameters: typeof MapPartialParameters;
    const Parameter: typeof MapPartialParameter;
    type Argument<Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, ValidatableType extends Validatable = Validatable, MessageType = unknown> = MapPartialArgument<Validators, ValidatableType, MessageType>;
}
export default MapPartial;
