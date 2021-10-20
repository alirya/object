import Validator from "@dikac/t-validator/validator";
import InferBase from "@dikac/t-validator/base/infer";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/validatable";
import RecordValue from "./record-value";
export default function RecordValueCallback<ValidatorType extends Validator = Validator, Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>, ValidatableType extends Validatable = Validatable, Message = unknown>(validator: ValidatorType, handler: (record: Partial<Record<PropertyKey, InferBase<ValidatorType>>>, validator: ValidatorType) => Result, validation: (result: Result) => ValidatableType, message: (result: Result) => Message): RecordValue<ValidatorType, Result, ValidatableType, Message>;
