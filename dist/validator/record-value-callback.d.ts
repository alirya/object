import Validator from "@dikac/t-validator/validator";
import InferBase from "@dikac/t-validator/base/infer";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/validatable";
import RecordValue from "./record-value";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import MessageType from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
export declare type Argument<ValidatorType extends Validator = Validator, Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>, ValidatableType extends Validatable = Validatable, Message = unknown> = ValidatorContainer<ValidatorType> & MessageType<(result: Result) => Message> & {
    handler: (argument: Value<Partial<Record<PropertyKey, InferBase<ValidatorType>>>> & ValidatorContainer<ValidatorType>) => Result;
} & {
    validation: (result: Result) => ValidatableType;
};
export default function RecordValueCallback<ValidatorType extends Validator = Validator, Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>, ValidatableType extends Validatable = Validatable, Message = unknown>({ validator, handler, validation, message }: Argument<ValidatorType, Result, ValidatableType, Message>): RecordValue<ValidatorType, Result, ValidatableType, Message>;
