import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "@dikac/t-validator/validatable/infer-unambiguous";
import RecordKey from "./record-key";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import Message from "@dikac/t-message/message";
export default RecordKeyAll;
declare namespace RecordKeyAll {
    const Parameter: typeof RecordKeyAllParameter;
    const Object: typeof RecordKeyAllObject;
    type Argument<ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable, MessageType = unknown> = RecordKeyAllArgument<ValidatorType, ValidatableType, MessageType>;
}
export declare function RecordKeyAllParameter<ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable, MessageType = unknown>(validator: ValidatorType, validation: (record: Record<PropertyKey, ReturnInfer<ValidatorType>>) => ValidatableType, message: (record: Record<PropertyKey, ReturnInfer<ValidatorType>>) => MessageType): RecordKey<ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType>;
export declare type RecordKeyAllArgument<ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable, MessageType = unknown> = ValidatorContainer<ValidatorType> & {
    validation: (record: Record<PropertyKey, ReturnInfer<ValidatorType>>) => ValidatableType;
} & Message<(record: Record<PropertyKey, ReturnInfer<ValidatorType>>) => MessageType>;
export declare function RecordKeyAllObject<ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable, MessageType = unknown>({ validator, validation, message, }: RecordKeyAllArgument<ValidatorType, ValidatableType, MessageType>): RecordKey<ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType>;
