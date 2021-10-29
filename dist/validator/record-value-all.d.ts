import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "@dikac/t-validator/validatable/infer-unambiguous";
import RecordValue from "./record-value";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import Message from "@dikac/t-message/message";
export default RecordValueAll;
declare namespace RecordValueAll {
    const Parameter: typeof RecordValueAllParameter;
    const Object: typeof RecordValueAllObject;
    type Argument<ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable, MessageType = unknown> = RecordValueAllArgument<ValidatorType, ValidatableType, MessageType>;
}
export declare function RecordValueAllParameter<ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable, MessageType = unknown>(validator: ValidatorType, validation: (record: Record<PropertyKey, ReturnInfer<ValidatorType>>) => ValidatableType, message: (record: Record<PropertyKey, ReturnInfer<ValidatorType>>) => MessageType): RecordValue<ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType>;
export declare type RecordValueAllArgument<ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable, MessageType = unknown> = ValidatorContainer<ValidatorType> & Message<(record: Record<PropertyKey, ReturnInfer<ValidatorType>>) => MessageType> & {
    validation: (record: Record<PropertyKey, ReturnInfer<ValidatorType>>) => ValidatableType;
};
export declare function RecordValueAllObject<ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable, MessageType = unknown>({ validator, validation, message, }: RecordValueAllArgument<ValidatorType, ValidatableType, MessageType>): RecordValue<ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType>;
