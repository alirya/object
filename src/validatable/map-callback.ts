import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordBase from "../validator/subject/record/allow";
import Instance from "@dikac/t-validator/validatable/validatable";
import MapCallbackParameters from "./map-callback-parameters";
import MapCallbackParameter, {MapCallbackArgument} from "./map-callback-parameter";

namespace MapCallback {

    export const Parameters = MapCallbackParameters;
    export const Parameter = MapCallbackParameter;

    export type Argument<
        MessageType = unknown,
        ValidatorsType extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
        Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
        ValidatableType extends Validatable = Validatable,
        ValueType extends RecordBase<ValidatorsType> = RecordBase<ValidatorsType>
    > = MapCallbackArgument<
        MessageType,
        ValidatorsType,
        Result,
        ValidatableType,
        ValueType
    >;
}

export default MapCallback;
