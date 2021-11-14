import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "./validatable/record/infer";
import Map from "./map";
import ValidatorsContainer from "./validators/validators";
import Message from "@dikac/t-message/message";
import MapPartialParameters from "./map-partial-parameters";

export type MapPartialArgument<
    Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown
    > =
    ValidatorsContainer<Validators> &
    Message<(result:Partial<ReturnInfer<Validators>>)=>MessageType> &
    // TODO MOVE TO STANDARD VALIDATOR
    {validation : (result:Partial<ReturnInfer<Validators>>)=>ValidatableType};

export default function MapPartialParameter<
    Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown
>(
    // validators : Validators,
    // validation : (result:Partial<ReturnInfer<Validators>>)=>ValidatableType,
    // message : (result:Partial<ReturnInfer<Validators>>)=>MessageType,
    {
        validators,
        validation,
        message
    } : MapPartialArgument<Validators, ValidatableType, MessageType>
) : Map<Validators, Partial<ReturnInfer<Validators>>, ValidatableType, MessageType> {

    return MapPartialParameters(validators, validation, message);
}


