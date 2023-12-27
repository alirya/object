import Validator from '@axiona/validator/validator.js';
import Validatable from '@axiona/validatable/validatable.js';
import ValidatableValueCallback, {ValueCallbackContext} from '../validatable/value-callback.js';
import Instance from '@axiona/validator/validatable/validatable.js';
import BaseValue from '@axiona/value/value.js';
import ValidatorsContainer from './validators/validators.js';
import Message from '@axiona/message/message.js';
// import ValidatableValue from '../validatable/value.js';
import Dynamic from '@axiona/validator/validatable/validatable.js';


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

export function ValueCallbackParameters<
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
) : ValueCallbackReturn<BaseType, ValueType, MessageType, ValidatorsType, Validatables, ValidatableType> {

    return function <Argument extends BaseType, ValueType extends BaseType>(value: Argument|ValueType) {

        return new ValidatableValueCallback.Parameters(value, validators, map, validation, message);

    } as ValueCallbackReturn<BaseType, ValueType, MessageType, ValidatorsType, Validatables, ValidatableType>;
}


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


export function ValueCallbackParameter<
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
) : ValueCallbackReturn<BaseType, ValueType, MessageType, ValidatorsType, Validatables, ValidatableType> {

    return ValueCallbackParameters(
        validators,
        (value, validators) => map({value, validators}),
        validation, message
    );
}



/**
 * extended {@link Validator} for validating value with record of {@link Validator}
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

export type ValueCallbackReturn<
    Base,
    Value extends Base,
    MessageType,
    RecordType extends Record<PropertyKey, Validator<Base, Value>>,
    Result extends Partial<Record<PropertyKey, Dynamic>>,
    ValidatableType extends Validatable
> = Validator<
    Base,
    Value,
    boolean, true,
    MessageType,
    ValueCallbackContext</*Base, RecordType,*/ Result/*, ValidatableType*/>
    // ValidatableValue<Base, MessageType, RecordType, Result, ValidatableType>
>;


namespace ValueCallback {
    export const Parameters = ValueCallbackParameters;
    export const Parameter = ValueCallbackParameter;
    export type Argument<
        BaseType = unknown,
        ValueType extends BaseType = BaseType,
        MessageType = unknown,
        ValidatorsType extends Record<PropertyKey, Validator<BaseType, ValueType>> = Record<PropertyKey, Validator<BaseType, ValueType>>,
        Validatables extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
        ValidatableType extends Validatable = Validatable
    > = ValueCallbackArgument<
        BaseType,
        ValueType,
        MessageType,
        ValidatorsType,
        Validatables,
        ValidatableType
    >;

    export type Return<
        Base,
        Value extends Base,
        MessageType,
        RecordType extends Record<PropertyKey, Validator<Base, Value>>,
        Result extends Partial<Record<PropertyKey, Dynamic>>,
        ValidatableType extends Validatable
    > = ValueCallbackReturn<
        Base,
        Value,
        MessageType,
        RecordType,
        Result,
        ValidatableType
    >;
}
export default ValueCallback;
