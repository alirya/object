import Validator from '@alirya/validator/validator';
import Validatable from '@alirya/validatable/validatable';
import RecordParameter from './subject/record/allow';
import Map from './map';
import Instance from '@alirya/validator/validatable/validatable';
import ValidatorsContainer from './validators/validators';
import Message from '@alirya/message/message';
import MapCallbackParameters from './map-callback-parameters';

export type MapCallbackArgument<
    Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
> =
    ValidatorsContainer<Validators> &
    Message<(result:Result)=>MessageType> &
    // TODO MOVE TO STANDARD VALIDATOR
    {validation : (result:Result)=>ValidatableType} &
    {map:(record:RecordParameter<Validators>, validators : Validators)=>Result};

export default function MapCallbackParameter<
    Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    {validators, map, validation, message} : MapCallbackArgument<Validators, Result, ValidatableType, MessageType>
) : Map<Validators, Result, ValidatableType, MessageType> {

    return MapCallbackParameters(validators, map, validation, message);

}



