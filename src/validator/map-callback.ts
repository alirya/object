import Validator from '@axiona/validator/validator.js';
import Validatable from '@axiona/validatable/validatable.js';
import RecordParameter from './subject/record/allow.js';
import ValidatableMapCallback, {MapCallbackContext} from '../validatable/map-callback.js';
import Instance from '@axiona/validator/validatable/validatable.js';
import ValidatorsContainer from './validators/validators.js';
import Message from '@axiona/message/message.js';
import ValidatorSimple from '@axiona/validator/simple.js';
// import ValidatableMap from '../validatable/map.js';
import RecordBase from './subject/record/allow.js';
import RecordType from './subject/record/expectation.js';
import {ObjectParameters} from './object.js';

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

    const objectValidator = ObjectParameters();

    // TODO ADD TYPE FOR NON OBJECT RETURN?
    return function (value) {

        const validatable = objectValidator(value);

        if(!validatable.valid) {

            return validatable;
        }

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
        MessageType,
        MapCallbackContext</*MessageType, */ValidatorsType, Result, ValidatableType/*, RecordBase<ValidatorsType>*/>
        // ValidatableMap<MessageType, ValidatorsType, Result, ValidatableType, RecordBase<ValidatorsType>>
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
