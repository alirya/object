import Validator from '@alirya/validator/validator';
import Validatable from '@alirya/validatable/validatable';
import ReturnInfer from './validatable/record/infer';
import Map from './map';
import ValidatorsContainer from './validators/validators';
import Message from '@alirya/message/message';
import MapAllParameters from './map-all-parameters';


export type MapAllArgument<
    Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown
> =
    ValidatorsContainer<Validators> &
    Message<(result:ReturnInfer<Validators>)=>MessageType> &
    // TODO MOVE TO STANDARD VALIDATOR
    {validation : (result:ReturnInfer<Validators>)=>ValidatableType};

export default function MapAllParameter<
    Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown
>(
    {
        validators,
        validation,
        message,
    } : MapAllArgument<Validators, ValidatableType, MessageType>
) : Map<Validators, ReturnInfer<Validators>, ValidatableType, MessageType> {

    return MapAllParameters(validators, validation, message);
}

