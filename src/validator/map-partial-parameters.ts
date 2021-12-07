import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "./validatable/record/infer";
import ValidateMap from "./validatable/record/map-partial-parameters";
import Map from "./map";
import MapCallback from "./map-callback-parameters";

export default function MapPartialParameters<
    Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown
>(
    validators : Validators,
    validation : (result:Partial<ReturnInfer<Validators>>)=>ValidatableType,
    message : (result:Partial<ReturnInfer<Validators>>)=>MessageType,
) : Map<Validators, Partial<ReturnInfer<Validators>>, ValidatableType, MessageType> {

    return <Map<Validators, Partial<ReturnInfer<Validators>>, ValidatableType, MessageType>> MapCallback(
        validators,
        ValidateMap,
        validation,
        message
    );
}

