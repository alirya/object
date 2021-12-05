import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "./validatable/record/infer";
import ValidateMap from "./validatable/record/map";
import Map from "./map";
import MapCallback from "./map-callback";

export default function MapAllParameters<
    Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown
>(
    validators : Validators,
    validation : (result:ReturnInfer<Validators>)=>ValidatableType,
    message : (result:ReturnInfer<Validators>)=>MessageType,
) : Map<Validators, ReturnInfer<Validators>, ValidatableType, MessageType> {

    return <Map<Validators, ReturnInfer<Validators>, ValidatableType, MessageType>> MapCallback.Parameters(
        validators,
         (value)=>ValidateMap.Parameters(value, validators),
        validation,
        message
    );
}

