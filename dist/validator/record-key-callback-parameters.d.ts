import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordKey from "./record-key";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import InferBase from "@dikac/t-validator/subject/allow";
export default function RecordKeyCallbackParameters<ValidatorType extends Validator<PropertyKey> = Validator<PropertyKey>, Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>, ValidatableType extends Validatable = Validatable, MessageType = unknown>(validator: ValidatorType, handler: (value: Record<InferBase<ValidatorType>, any>, validator: ValidatorType) => Result, validation: (result: Result) => ValidatableType, message: (result: Result) => MessageType): RecordKey<ValidatorType, Result, ValidatableType, MessageType>;
