import Validator from '@alirya/validator/simple.js';
import Validatable from '@alirya/validatable/validatable.js';
import ValidateValue from './validatable/record/value.js';
import MapReturn from './validatable/record/infer.js';
import ValueCallback, {ValueCallbackReturn as ValueAllReturn} from './value-callback.js';
import ValidatorsContainer from './validators/validators.js';
import Message from '@alirya/message/message.js';
import Dynamic from '@alirya/validator/validatable/validatable.js';

/**
 * more specific implementation of {@link ValueCallback}
 *
 * Validate value with all record of {@link Validator}
 *
 * @param validators
 * record of {@link Validator} to be used against {@template BaseType} or {@template ValueType}
 *
 * @param validation
 *
 * @param message
 *
 * @template BaseType
 * Base value type for all {@link Validator}
 *
 * @template ValueType
 * value type {@link Validator}
 *
 * @template MessageType
 * message type {@link Validator}
 *
 * @template Validators
 * type of {@param validators}
 *
 * @template ValidatableType
 * result after processing {@template Validators} with {@template BaseType} or {@template ValueType}
 */
export function ValueAllParameters<
    Base = unknown,
    Value extends Base = Base,
    MessageType = unknown,
    Validators extends Record<PropertyKey, Validator<Base, Value>> = Record<PropertyKey, Validator<Base, Value>>,
    ValidatableType extends Validatable = Validatable
>(
    validators : Validators,
    validation : (result:MapReturn<Validators>) => ValidatableType,
    message : (result:MapReturn<Validators>) => MessageType,
) : ValueAllReturn<Base, Value, MessageType, Validators, MapReturn<Validators>, ValidatableType> {

    return ValueCallback.Parameters(
        validators,
        ValidateValue.Parameters,
        validation,
        message
    ) as ValueAllReturn<Base, Value, MessageType, Validators, MapReturn<Validators>, ValidatableType>;
}




export function ValueAllParameter<
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
) : ValueAllReturn<Base, Value, MessageType, Validators, MapReturn<Validators>, ValidatableType> {

    return ValueAllParameters(
        validators,
        validation,
        message
    ) as ValueAllReturn<Base, Value, MessageType, Validators, MapReturn<Validators>, ValidatableType>;
}


namespace ValueAll {
    export const Parameters = ValueAllParameters;
    export const Parameter = ValueAllParameter;
    export type Return<
        Base,
        Value extends Base,
        MessageType,
        RecordType extends Record<PropertyKey, Validator<Base, Value>>,
        Result extends Partial<Record<PropertyKey, Dynamic>>,
        ValidatableType extends Validatable
    > = ValueAllReturn<
        Base,
        Value,
        MessageType,
        RecordType,
        Result,
        ValidatableType
    >;
}
export default ValueAll;
