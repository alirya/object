import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import ValidateValue from "./validatable/record/value";
import MapReturn from "./validatable/record/infer";
import ValueCallback, {ValueCallbackArgument, ValueCallbackObject, ValueCallbackParameter} from "./value-callback";
import ValueInterface from "./value";
import ValidatorsContainer from "./validators/validators";
import Message from "@dikac/t-message/message";
import Instance from "@dikac/t-validator/validatable/validatable";

export default ValueAll;
namespace ValueAll {

    export const Parameter = ValueAllParameter;
    export const Object = ValueAllObject;
    export type Argument<
        Base = unknown,
        Value extends Base = Base,
        MessageType = unknown,
        Validators extends Record<PropertyKey, Validator<Base, Value>> = Record<PropertyKey, Validator<Base, Value>>,
        ValidatableType extends Validatable = Validatable
    > = ValueAllArgument<
        Base,
        Value,
        MessageType,
        Validators,
        ValidatableType
    >;
}

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
export function ValueAllParameter<
    Base = unknown,
    Value extends Base = Base,
    MessageType = unknown,
    Validators extends Record<PropertyKey, Validator<Base, Value>> = Record<PropertyKey, Validator<Base, Value>>,
    ValidatableType extends Validatable = Validatable
>(
    validators : Validators,
    validation : (result:MapReturn<Validators>) => ValidatableType,
    message : (result:MapReturn<Validators>) => MessageType,
    //{
    //    validators,
    //    validation,
    //    message,
    //} : ValidatorsContainer<Validators> &
    //    Message<(result:MapReturn<Validators>) => MessageType> &
    //    {validation : (result:MapReturn<Validators>) => ValidatableType}
) : ValueInterface<Base, Value, MessageType, Validators, MapReturn<Validators>, ValidatableType> {

    return ValueCallback.Parameter(
        validators,
        ValidateValue.Parameter,
        validation,
        message
    ) as ValueInterface<Base, Value, MessageType, Validators, MapReturn<Validators>, ValidatableType>;
}


export type ValueAllArgument<
    Base = unknown,
    Value extends Base = Base,
    MessageType = unknown,
    Validators extends Record<PropertyKey, Validator<Base, Value>> = Record<PropertyKey, Validator<Base, Value>>,
    ValidatableType extends Validatable = Validatable
> = ValidatorsContainer<Validators> &
    Message<(result:MapReturn<Validators>) => MessageType> &
    {validation : (result:MapReturn<Validators>) => ValidatableType};

export function ValueAllObject<
    Base = unknown,
    Value extends Base = Base,
    MessageType = unknown,
    Validators extends Record<PropertyKey, Validator<Base, Value>> = Record<PropertyKey, Validator<Base, Value>>,
    ValidatableType extends Validatable = Validatable
>(
    // validators : Validators,
    // validation : (result:MapReturn<Validators>) => ValidatableType,
    // message : (result:MapReturn<Validators>) => MessageType,
    {
        validators,
        validation,
        message,
    } : ValidatorsContainer<Validators> &
        Message<(result:MapReturn<Validators>) => MessageType> &
        {validation : (result:MapReturn<Validators>) => ValidatableType}
) : ValueInterface<Base, Value, MessageType, Validators, MapReturn<Validators>, ValidatableType> {

    return ValueAllParameter(
        validators,
        validation,
        message
    ) as ValueInterface<Base, Value, MessageType, Validators, MapReturn<Validators>, ValidatableType>;
}
