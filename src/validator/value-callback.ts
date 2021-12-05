import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/dynamic";
import ValueCallbackParameters from "./value-callback-parameters";
import ValueCallbackParameter, {ValueCallbackArgument} from "./value-callback-parameter";


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
}
export default ValueCallback;
