import Validator from '@alirya/validator/validator';
import Validatable from '@alirya/validatable/validatable';
import ValidatableValueCallback from '../validatable/value-callback-parameters';
import Instance from '@alirya/validator/validatable/validatable';
import Value from './value';


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

export default function ValueCallbackParameters<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    MessageType = unknown,
    ValidatorsType extends Record<PropertyKey, Validator<BaseType, ValueType>> = Record<PropertyKey, Validator<BaseType, ValueType>>,
    Validatables extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable = Validatable
>(
    validators : ValidatorsType,
    map : (base : BaseType, record : ValidatorsType) => Validatables,
    validation : (result : Validatables)=>ValidatableType,
    message : (result : Validatables)=>MessageType
) : Value<BaseType, ValueType, MessageType, ValidatorsType, Validatables, ValidatableType> {

    return function <Argument extends BaseType, ValueType extends BaseType>(value: Argument|ValueType) {

        return new ValidatableValueCallback(value, validators, map, validation, message);

    } as Value<BaseType, ValueType, MessageType, ValidatorsType, Validatables, ValidatableType>;
}
