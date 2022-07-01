import Validator from '@alirya/validator/validator';
import Validatable from '@alirya/validatable/validatable';
import ReturnInfer from './validatable/record/infer';
import ValidateMap from './validatable/record/map-partial';
import MapCallback, {MapCallbackReturn as MapPartialReturn} from './map-callback';
import ValidatorsContainer from './validators/validators';
import Message from '@alirya/message/message';
import Instance from '@alirya/validator/validatable/validatable';

export function MapPartialParameters<
    Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown
>(
    validators : Validators,
    validation : (result:Partial<ReturnInfer<Validators>>)=>ValidatableType,
    message : (result:Partial<ReturnInfer<Validators>>)=>MessageType,
) : MapPartialReturn<Validators, Partial<ReturnInfer<Validators>>, ValidatableType, MessageType> {

    return <MapPartialReturn<Validators, Partial<ReturnInfer<Validators>>, ValidatableType, MessageType>> MapCallback.Parameters(
        validators,
        ValidateMap.Parameters,
        validation,
        message
    );
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

export function MapPartialParameter<
    Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown
>(
    {
        validators,
        validation,
        message
    } : MapPartialArgument<Validators, ValidatableType, MessageType>
) : MapPartialReturn<Validators, Partial<ReturnInfer<Validators>>, ValidatableType, MessageType> {

    return MapPartialParameters(validators, validation, message);
}


namespace MapPartial {
    export const Parameters = MapPartialParameters;
    export const Parameter = MapPartialParameter;

    export type Return<
        ValidatorsType extends Record<PropertyKey, Validator>,
        Result extends Partial<Record<PropertyKey, Instance>>,
        ValidatableType extends Validatable,
        MessageType,
    > = MapPartialReturn<
        ValidatorsType,
        Result,
        ValidatableType,
        MessageType
    >;

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
export default MapPartial;
