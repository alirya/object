import Validator from '@axiona/validator/validator.js';
import Validatable from '@axiona/validatable/validatable.js';
import ReturnInfer from './validatable/record/infer.js';
import ValidateMap from './validatable/record/map.js';
import MapCallback, {MapCallbackReturn as MapAllReturn} from './map-callback.js';
import ValidatorsContainer from './validators/validators.js';
import Message from '@axiona/message/message.js';
import Instance from '@axiona/validator/validatable/validatable.js';

export function MapAllParameters<
    Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown
>(
    validators : Validators,
    validation : (result:ReturnInfer<Validators>)=>ValidatableType,
    message : (result:ReturnInfer<Validators>)=>MessageType,
) : MapAllReturn<Validators, ReturnInfer<Validators>, ValidatableType, MessageType> {

    return <MapAllReturn<Validators, ReturnInfer<Validators>, ValidatableType, MessageType>> MapCallback.Parameters(
        validators,
         (value)=>ValidateMap.Parameters(value, validators),
        validation,
        message
    );
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
    {
        validators,
        validation,
        message,
    } : MapAllArgument<Validators, ValidatableType, MessageType>
) : MapAllReturn<Validators, ReturnInfer<Validators>, ValidatableType, MessageType> {

    return MapAllParameters(validators, validation, message);
}



namespace MapAll {
    export const Parameters = MapAllParameters;
    export const Parameter = MapAllParameter;
    export type Return<
        ValidatorsType extends Record<PropertyKey, Validator>,
        Result extends Partial<Record<PropertyKey, Instance>>,
        ValidatableType extends Validatable,
        MessageType,
    > = MapAllReturn<
        ValidatorsType,
        Result,
        ValidatableType,
        MessageType
    >;

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
