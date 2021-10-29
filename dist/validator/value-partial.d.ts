import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "./validatable/record/infer";
import MapReturn from "./validatable/record/infer";
import ValidatorsContainer from "./validators/validators";
import ValueInterface from "./value";
import Message from "@dikac/t-message/message";
export default ValuePartial;
declare namespace ValuePartial {
    const Parameter: typeof ValuePartialParameter;
    const Object: typeof ValuePartialObject;
    type Type = ValuePartialType;
    type Argument<BaseType = unknown, ValueType extends BaseType = BaseType, MessageType = unknown, Validators extends Record<PropertyKey, Validator<BaseType, ValueType>> = Record<PropertyKey, Validator<BaseType, ValueType>>, ValidatableType extends Validatable = Validatable> = ValuePartialArgument<BaseType, ValueType, MessageType, Validators, ValidatableType>;
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
export declare type ValuePartialArgument<BaseType = unknown, ValueType extends BaseType = BaseType, MessageType = unknown, Validators extends Record<PropertyKey, Validator<BaseType, ValueType>> = Record<PropertyKey, Validator<BaseType, ValueType>>, ValidatableType extends Validatable = Validatable> = ValidatorsContainer<Validators> & {
    validation: (result: Partial<ReturnInfer<Validators>>) => ValidatableType;
} & Message<(result: Partial<ReturnInfer<Validators>>) => MessageType> & {
    stop?: boolean;
};
export declare type ValuePartialType<BaseType = unknown, ValueType extends BaseType = BaseType, MessageType = unknown, Validators extends Record<PropertyKey, Validator<BaseType, ValueType>> = Record<PropertyKey, Validator<BaseType, ValueType>>, ValidatableType extends Validatable = Validatable> = ValueInterface<BaseType, ValueType, MessageType, Validators, Partial<MapReturn<Validators>>, ValidatableType>;
export declare function ValuePartialParameter<BaseType = unknown, ValueType extends BaseType = BaseType, MessageType = unknown, Validators extends Record<PropertyKey, Validator<BaseType, ValueType>> = Record<PropertyKey, Validator<BaseType, ValueType>>, ValidatableType extends Validatable = Validatable>(validators: Validators, validation: (result: Partial<ReturnInfer<Validators>>) => ValidatableType, message: (result: Partial<ReturnInfer<Validators>>) => MessageType, stop?: boolean): ValuePartialType<BaseType, ValueType, MessageType, Validators, ValidatableType>;
export declare function ValuePartialObject<BaseType = unknown, ValueType extends BaseType = BaseType, MessageType = unknown, Validators extends Record<PropertyKey, Validator<BaseType, ValueType>> = Record<PropertyKey, Validator<BaseType, ValueType>>, ValidatableType extends Validatable = Validatable>({ validators, validation, message, stop, }: ValuePartialArgument<BaseType, ValueType, MessageType, Validators, ValidatableType>): ValuePartialType<BaseType, ValueType, MessageType, Validators, ValidatableType>;
