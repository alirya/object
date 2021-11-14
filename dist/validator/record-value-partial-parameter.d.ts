import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "@dikac/t-validator/validatable/infer-static";
import RecordValue from "./record-value";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import Message from "@dikac/t-message/message";
export declare type RecordValuePartialArgument<ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable, MessageType = unknown> = ValidatorContainer<ValidatorType> & Message<(record: Record<PropertyKey, ReturnInfer<ValidatorType>>) => MessageType> & {
    validation: (record: Record<PropertyKey, ReturnInfer<ValidatorType>>) => ValidatableType;
};
export default function RecordValuePartialParameter<ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable, MessageType = unknown>({ validator, validation, message, }: RecordValuePartialArgument<ValidatorType, ValidatableType, MessageType>): RecordValue<ValidatorType, Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>, ValidatableType, MessageType>;
