import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "@dikac/t-validator/validatable/infer-unambiguous";
import RecordValue from "./record-value";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import Message from "@dikac/t-message/message";
export default RecordValuePartial;
declare namespace RecordValuePartial {
    const Parameter: typeof RecordValuePartialParameter;
    const Object: typeof RecordValuePartialObject;
    type Argument<ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable, MessageType = unknown> = RecordValuePartialArgument<ValidatorType, ValidatableType, MessageType>;
}
export declare function RecordValuePartialParameter<ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable, MessageType = unknown>(validator: ValidatorType, validation: (record: Record<PropertyKey, ReturnInfer<ValidatorType>>) => ValidatableType, message: (record: Record<PropertyKey, ReturnInfer<ValidatorType>>) => MessageType): RecordValue<ValidatorType, Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>, ValidatableType, MessageType>;
export declare type RecordValuePartialArgument<ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable, MessageType = unknown> = ValidatorContainer<ValidatorType> & Message<(record: Record<PropertyKey, ReturnInfer<ValidatorType>>) => MessageType> & {
    validation: (record: Record<PropertyKey, ReturnInfer<ValidatorType>>) => ValidatableType;
};
export declare function RecordValuePartialObject<ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable, MessageType = unknown>({ validator, validation, message, }: RecordValuePartialArgument<ValidatorType, ValidatableType, MessageType>): RecordValue<ValidatorType, Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>, ValidatableType, MessageType>;
