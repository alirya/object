import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import MapAllParameters from "./map-all-parameters";
import MapAllParameter, {MapAllArgument} from "./map-all-parameter";

namespace MapAll {

    export const Parameters = MapAllParameters;
    export const Parameter = MapAllParameter;
    export type Argument<
        Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
        ValidatableType extends Validatable = Validatable,
        MessageType = unknown
    > = MapAllArgument<
        Validators,
        ValidatableType,
        MessageType
    >;
}
export default MapAll;
