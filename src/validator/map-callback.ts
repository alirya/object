import Validator from '@alirya/validator/validator';
import Validatable from '@alirya/validatable/validatable';
import RecordParameter from './subject/record/allow';
import ValidatableMapCallback from '../validatable/map-callback';
import Instance from '@alirya/validator/validatable/validatable';
import ValidatorsContainer from './validators/validators';
import Message from '@alirya/message/message';
import ValidatorSimple from '@alirya/validator/simple';
import ValidatableMap from '../validatable/map';
import RecordBase from './subject/record/allow';
import RecordType from './subject/record/expectation';

export function MapCallbackParameters<
    Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validators : Validators,
    map : (record:RecordParameter<Validators>, validators : Validators)=>Result,
    validation : (result:Result)=>ValidatableType,
    message : (result:Result)=>MessageType,
) : MapCallbackReturn<Validators, Result, ValidatableType, MessageType> {

    return function (value ) {

        return new ValidatableMapCallback.Parameters(value, validators, map, validation, message);

    } as MapCallbackReturn<Validators, Result, ValidatableType, MessageType>;

}


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

export function MapCallbackParameter<
    Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    {validators, map, validation, message} : MapCallbackArgument<Validators, Result, ValidatableType, MessageType>
) : MapCallbackReturn<Validators, Result, ValidatableType, MessageType> {

    return MapCallbackParameters(validators, map, validation, message);
}



export type MapCallbackReturn<
    ValidatorsType extends Record<PropertyKey, Validator>,
    Result extends Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable,
    MessageType,
    > =
    ValidatorSimple<
        RecordBase<ValidatorsType>,
        RecordType<ValidatorsType>,
        ValidatableMap<MessageType, ValidatorsType, Result, ValidatableType, RecordBase<ValidatorsType>>
        >/* ,
    Validation<(result:Result)=>ValidatableType> ,
    Validators<ValidatorsType>,
    Message<(result:Result)=>MessageType>*/
    ;



namespace MapCallback {
    export const Parameters = MapCallbackParameters;
    export const Parameter = MapCallbackParameter;

    export type  Return<
        ValidatorsType extends Record<PropertyKey, Validator>,
        Result extends Partial<Record<PropertyKey, Instance>>,
        ValidatableType extends Validatable,
        MessageType,
    > = MapCallbackReturn<
        ValidatorsType,
        Result,
        ValidatableType,
        MessageType
    >;
}
export default MapCallback;
