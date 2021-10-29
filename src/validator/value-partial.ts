import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import ValidateValuePartial from "./validatable/record/value-partial";
import ReturnInfer from "./validatable/record/infer";
import MapReturn from "./validatable/record/infer";
import ValidatorsContainer from "./validators/validators";
import ValueCallback from "./value-callback";
import ValueInterface from "./value";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import Message from "@dikac/t-message/message";

export default ValuePartial;
namespace ValuePartial {

    export const Parameter = ValuePartialParameter;
    export const Object = ValuePartialObject;
    export type Type = ValuePartialType;
    export type Argument<
        BaseType = unknown,
        ValueType extends BaseType = BaseType,
        MessageType = unknown,
        Validators extends Record<PropertyKey, Validator<BaseType, ValueType>> = Record<PropertyKey, Validator<BaseType, ValueType>>,
        ValidatableType extends Validatable = Validatable
    > = ValuePartialArgument<
        BaseType,
        ValueType,
        MessageType,
        Validators,
        ValidatableType
    >;
}
/**
 * more specific implementation of {@link ValueCallback}
 *
 * Validate value with record of {@link Validator}
 * stop on encounter {@param stop} result from {@link Validator}
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

export type ValuePartialArgument<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    MessageType = unknown,
    Validators extends Record<PropertyKey, Validator<BaseType, ValueType>> = Record<PropertyKey, Validator<BaseType, ValueType>>,
    ValidatableType extends Validatable = Validatable
> =
    ValidatorsContainer<Validators> &
    // TODO SWITCH TO VALIDATOR
    {validation : (result:Partial<ReturnInfer<Validators>>) => ValidatableType} &
    Message<(result:Partial<ReturnInfer<Validators>>) => MessageType> &
    {stop ?: boolean}
;

export type ValuePartialType<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    MessageType = unknown,
    Validators extends Record<PropertyKey, Validator<BaseType, ValueType>> = Record<PropertyKey, Validator<BaseType, ValueType>>,
    ValidatableType extends Validatable = Validatable
> = ValueInterface<BaseType, ValueType, MessageType, Validators, Partial<MapReturn<Validators>>, ValidatableType>

export function ValuePartialParameter<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    MessageType = unknown,
    Validators extends Record<PropertyKey, Validator<BaseType, ValueType>> = Record<PropertyKey, Validator<BaseType, ValueType>>,
    ValidatableType extends Validatable = Validatable
>(
     validators : Validators,
     validation : (result:Partial<ReturnInfer<Validators>>) => ValidatableType,
     message : (result:Partial<ReturnInfer<Validators>>) => MessageType,
     stop : boolean = false,
    // {
    //     validators,
    //     validation,
    //     message,
    //     stop = false,
    // } : Argument<BaseType, ValueType, MessageType, Validators, ValidatableType>
) : ValuePartialType<BaseType, ValueType, MessageType, Validators, ValidatableType> {

    return <ValuePartialType<BaseType, ValueType, MessageType, Validators, ValidatableType>> ValueCallback.Parameter(
        validators,
        (value, validators)  => ValidateValuePartial.Parameter(value, validators, stop),
        validation,
        message
    );
}
export function ValuePartialObject<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    MessageType = unknown,
    Validators extends Record<PropertyKey, Validator<BaseType, ValueType>> = Record<PropertyKey, Validator<BaseType, ValueType>>,
    ValidatableType extends Validatable = Validatable
>(
    // validators : Validators,
    // validation : (result:Partial<ReturnInfer<Validators>>) => ValidatableType,
    // message : (result:Partial<ReturnInfer<Validators>>) => MessageType,
    // stop : boolean = false,
    {
        validators,
        validation,
        message,
        stop = false,
    } : ValuePartialArgument<BaseType, ValueType, MessageType, Validators, ValidatableType>
) : ValuePartialType<BaseType, ValueType, MessageType, Validators, ValidatableType> {

    return ValuePartialParameter(
        validators,
        validation,
        message,
        stop
    );

}
