import Validator from '@axiona/validator/simple.js';
import Validatable from '@axiona/validatable/validatable.js';
import ValidateValuePartial from './validatable/record/value-partial.js';
import ReturnInfer from './validatable/record/infer.js';
import MapReturn from './validatable/record/infer.js';
import ValueCallback, {ValueCallbackReturn} from './value-callback.js';
import ValidatorsContainer from './validators/validators.js';
import Message from '@axiona/message/message.js';


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

export type ValuePartialReturn<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    MessageType = unknown,
    Validators extends Record<PropertyKey, Validator<BaseType, ValueType>> = Record<PropertyKey, Validator<BaseType, ValueType>>,
    ValidatableType extends Validatable = Validatable
> = ValueCallbackReturn<BaseType, ValueType, MessageType, Validators, Partial<MapReturn<Validators>>, ValidatableType>;

export function ValuePartialParameters<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    MessageType = unknown,
    Validators extends Record<PropertyKey, Validator<BaseType, ValueType>> = Record<PropertyKey, Validator<BaseType, ValueType>>,
    ValidatableType extends Validatable = Validatable
>(
     validators : Validators,
     validation : (result:Partial<ReturnInfer<Validators>>) => ValidatableType,
     message : (result:Partial<ReturnInfer<Validators>>) => MessageType,
     stop  = false,
) : ValuePartialReturn<BaseType, ValueType, MessageType, Validators, ValidatableType> {

    return <ValuePartialReturn<BaseType, ValueType, MessageType, Validators, ValidatableType>> ValueCallback.Parameters(
        validators,
        (value, validators)  => ValidateValuePartial.Parameters(value, validators, stop),
        validation,
        message
    );
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


export function ValuePartialParameter<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    MessageType = unknown,
    Validators extends Record<PropertyKey, Validator<BaseType, ValueType>> = Record<PropertyKey, Validator<BaseType, ValueType>>,
    ValidatableType extends Validatable = Validatable
>(
    {
        validators,
        validation,
        message,
        stop = false,
    } : ValuePartialArgument<BaseType, ValueType, MessageType, Validators, ValidatableType>
) : ValuePartialReturn<BaseType, ValueType, MessageType, Validators, ValidatableType> {

    return ValuePartialParameters(
        validators,
        validation,
        message,
        stop
    );

}


namespace ValuePartial {
    export const Parameters = ValuePartialParameters;
    export const Parameter = ValuePartialParameter;
    export type Return<
        BaseType = unknown,
        ValueType extends BaseType = BaseType,
        MessageType = unknown,
        Validators extends Record<PropertyKey, Validator<BaseType, ValueType>> = Record<PropertyKey, Validator<BaseType, ValueType>>,
        ValidatableType extends Validatable = Validatable
    > = ValuePartialReturn<
        BaseType,
        ValueType,
        MessageType,
        Validators,
        ValidatableType
    >;
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
export default ValuePartial;
