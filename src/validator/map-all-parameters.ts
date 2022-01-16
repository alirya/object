import Validator from '@alirya/validator/validator';
import Validatable from '@alirya/validatable/validatable';
import ReturnInfer from './validatable/record/infer';
import ValidateMap from './validatable/record/map-parameters';
import Map from './map';
import MapCallback from './map-callback-parameters';

export default function MapAllParameters<
    Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown
>(
    validators : Validators,
    validation : (result:ReturnInfer<Validators>)=>ValidatableType,
    message : (result:ReturnInfer<Validators>)=>MessageType,
) : Map<Validators, ReturnInfer<Validators>, ValidatableType, MessageType> {

    return <Map<Validators, ReturnInfer<Validators>, ValidatableType, MessageType>> MapCallback(
        validators,
         (value)=>ValidateMap(value, validators),
        validation,
        message
    );
}

