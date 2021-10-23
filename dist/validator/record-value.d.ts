import SimpleValidator from "@dikac/t-validator/simple";
import Validator from "@dikac/t-validator/validator";
import InferBase from "@dikac/t-validator/base/infer";
import InferType from "@dikac/t-validator/expectation/infer";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableRecord from "../validatable/record-value";
import Instance from "@dikac/t-validator/validatable/validatable";
declare type RecordValue<ValidatorTemplate extends Validator, Result extends Partial<Record<PropertyKey, Instance>>, ValidatableTemplate extends Validatable, MessageTemplate> = SimpleValidator<Record<PropertyKey, InferBase<ValidatorTemplate>>, Record<PropertyKey, InferType<ValidatorTemplate>>, ValidatableRecord<MessageTemplate, Record<PropertyKey, InferBase<ValidatorTemplate>>, ValidatorTemplate, Result, ValidatableTemplate>>;
export default RecordValue;
