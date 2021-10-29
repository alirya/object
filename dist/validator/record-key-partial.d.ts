import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "@dikac/t-validator/validatable/infer-unambiguous";
import RecordKey from "./record-key";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import Message from "@dikac/t-message/message";
export default RecordKeyPartial;
declare namespace RecordKeyPartial {
    const Parameter: typeof RecordKeyPartialParameter;
    const Object: typeof RecordKeyPartialObject;
    type Argument<ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable, MessageType = unknown> = RecordKeyPartialArgument<ValidatorType, ValidatableType, MessageType>;
}
export declare function RecordKeyPartialParameter<ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable, MessageType = unknown>(validator: ValidatorType, validation: (partial: Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>) => ValidatableType, message: (partial: Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>) => MessageType): RecordKey<ValidatorType, Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>, ValidatableType, MessageType>;
export declare type RecordKeyPartialArgument<ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable, MessageType = unknown> = ValidatorContainer<ValidatorType> & {
    validation: (partial: Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>) => ValidatableType;
} & Message<(partial: Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>) => MessageType>;
export declare function RecordKeyPartialObject<ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable, MessageType = unknown>({ validator, validation, message }: RecordKeyPartialArgument<ValidatorType, ValidatableType, MessageType>): RecordKey<ValidatorType, Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>, ValidatableType, MessageType>;
