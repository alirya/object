import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "@dikac/t-validator/validatable/infer-unambiguous";
import RecordKey from "./record-key";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import Message from "@dikac/t-message/message";
export declare type Argument<ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable, MessageType = unknown> = ValidatorContainer<ValidatorType> & {
    validation: (partial: Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>) => ValidatableType;
} & Message<(partial: Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>) => MessageType>;
export default function RecordKeyPartial<ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable, MessageType = unknown>({ validator, validation, message }: Argument<ValidatorType, ValidatableType, MessageType>): RecordKey<ValidatorType, Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>, ValidatableType, MessageType>;
