import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "./validatable/record/infer";
import ValidateMap from "./validatable/record/map-partial";
import Map from "./map";
import Instance from "@dikac/t-validator/validatable/validatable";
import ValidatorsContainer from "./validators/validators";
import Message from "@dikac/t-message/message";
import RecordParameter from "./base/record/infer";

export default MapPartial;
namespace MapPartial {

    export const Parameter = MapPartialParameter;
    export const Object = MapPartialObject;
    export type Argument<
        Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
        ValidatableType extends Validatable = Validatable,
        MessageType = unknown
    > = MapPartialArgument<
        Validators,
        ValidatableType,
        MessageType
    >;
}

export function MapPartialParameter<
    Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown
>(
    validators : Validators,
    validation : (result:Partial<ReturnInfer<Validators>>)=>ValidatableType,
    message : (result:Partial<ReturnInfer<Validators>>)=>MessageType,
) : Map<Validators, Partial<ReturnInfer<Validators>>, ValidatableType, MessageType> {

    return <Map<Validators, Partial<ReturnInfer<Validators>>, ValidatableType, MessageType>> MapPartial({
        validators,
        map :({value, validators})=>ValidateMap({value, validators}),
        validation,
        message
    });
}

export type MapPartialArgument<
    Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown
    > =
    ValidatorsContainer<Validators> &
    Message<(result:Partial<ReturnInfer<Validators>>)=>MessageType> &
    // TODO MOVE TO STANDARD VALIDATOR
    {validation : (result:Partial<ReturnInfer<Validators>>)=>ValidatableType};

export function MapPartialObject<
    Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown
>(
    validators : Validators,
    validation : (result:Partial<ReturnInfer<Validators>>)=>ValidatableType,
    message : (result:Partial<ReturnInfer<Validators>>)=>MessageType,
) : Map<Validators, Partial<ReturnInfer<Validators>>, ValidatableType, MessageType> {

    return <Map<Validators, Partial<ReturnInfer<Validators>>, ValidatableType, MessageType>> MapPartial({
        validators,
        map :({value, validators})=>ValidateMap({value, validators}),
        validation,
        message
    });
}


