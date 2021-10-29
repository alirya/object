import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "./validatable/record/infer";
import ValidateMap from "./validatable/record/map";
import Map from "./map";
import Instance from "@dikac/t-validator/validatable/validatable";
import ValidatorsContainer from "./validators/validators";
import Message from "@dikac/t-message/message";
import RecordParameter from "./base/record/infer";

export default MapAll;
namespace MapAll {

    export const Parameter = MapAllParameter;
    export const Object = MapAllObject;
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

export type MapAllArgument<
    Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown
> =
    ValidatorsContainer<Validators> &
    Message<(result:ReturnInfer<Validators>)=>MessageType> &
    // TODO MOVE TO STANDARD VALIDATOR
    {validation : (result:ReturnInfer<Validators>)=>ValidatableType};

export function MapAllParameter<
    Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown
>(
    validators : Validators,
    validation : (result:ReturnInfer<Validators>)=>ValidatableType,
    message : (result:ReturnInfer<Validators>)=>MessageType,
) : Map<Validators, ReturnInfer<Validators>, ValidatableType, MessageType> {

    return <Map<Validators, ReturnInfer<Validators>, ValidatableType, MessageType>> MapAll({
        validators,
        map: ({value, validators})=>
        {

            return ValidateMap({value, validators});

        },
        validation, message
    });
}

export function MapAllObject<
    Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown
>(
    // validators : Validators,
    // validation : (result:ReturnInfer<Validators>)=>ValidatableType,
    // message : (result:ReturnInfer<Validators>)=>MessageType,
    {
        validators,
        validation,
        message,
    } : MapAllArgument<Validators, ValidatableType, MessageType>
) : Map<Validators, ReturnInfer<Validators>, ValidatableType, MessageType> {

    return MapAllParameter(validators, validation, message);
}

