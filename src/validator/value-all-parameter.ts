import Validator from '@alirya/validator/simple';
import Validatable from '@alirya/validatable/validatable';
import MapReturn from './validatable/record/infer';
import ValueInterface from './value';
import ValidatorsContainer from './validators/validators';
import Message from '@alirya/message/message';
import ValueAllParameters from './value-all-parameters';

export default function ValueAllParameter<
    Base = unknown,
    Value extends Base = Base,
    MessageType = unknown,
    Validators extends Record<PropertyKey, Validator<Base, Value>> = Record<PropertyKey, Validator<Base, Value>>,
    ValidatableType extends Validatable = Validatable
>(
    {
        validators,
        validation,
        message,
    } : ValidatorsContainer<Validators> &
        Message<(result:MapReturn<Validators>) => MessageType> &
        {validation : (result:MapReturn<Validators>) => ValidatableType}
) : ValueInterface<Base, Value, MessageType, Validators, MapReturn<Validators>, ValidatableType> {

    return ValueAllParameters(
        validators,
        validation,
        message
    ) as ValueInterface<Base, Value, MessageType, Validators, MapReturn<Validators>, ValidatableType>;
}
