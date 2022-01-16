import Validator from '@alirya/validator/validator';
import Validatable from '@alirya/validatable/validatable';
import Instance from '@alirya/validator/validatable/validatable';
import Value from './value';
import BaseValue from '@alirya/value/value';
import ValidatorsContainer from './validators/validators';
import Message from '@alirya/message/message';
import ValueCallbackParameters from './value-callback-parameters';


/**
 * Base implementation of {@link Value}
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
 * @template ValidatorsType
 * record of {@link Validator} to be used against {@template BaseType} or {@template ValueType}
 *
 * @template Validatables
 * result after processing {@template ValidatorsType} with {@template BaseType} or {@template ValueType}
 *
 * @template ValidatableType
 * final result after processing {@template Validatables}
 */


export type ValueCallbackArgument<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    MessageType = unknown,
    ValidatorsType extends Record<PropertyKey, Validator<BaseType, ValueType>> = Record<PropertyKey, Validator<BaseType, ValueType>>,
    Validatables extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable = Validatable
> =
    ValidatorsContainer<ValidatorsType> &
    { map : (argument : BaseValue<BaseType> & ValidatorsContainer<ValidatorsType>) => Validatables} &
    // TODO CHANGE TO VALIDATOR
    {validation: (result : Validatables)=>ValidatableType} &
    Message<(result : Validatables)=>MessageType>
    ;


export default function ValueCallbackParameter<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    MessageType = unknown,
    ValidatorsType extends Record<PropertyKey, Validator<BaseType, ValueType>> = Record<PropertyKey, Validator<BaseType, ValueType>>,
    Validatables extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable = Validatable
>(
    {
        validators,
        map,
        validation,
        message,
    } : ValueCallbackArgument<BaseType, ValueType, MessageType, ValidatorsType, Validatables, ValidatableType>
) : Value<BaseType, ValueType, MessageType, ValidatorsType, Validatables, ValidatableType> {

    return ValueCallbackParameters(
        validators,
        (value, validators) => map({value, validators}),
        validation, message
    );
}
