import Validator from "@dikac/t-validator/validator";
import SimpleValidator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/dynamic";
import InferBase from "@dikac/t-validator/base/infer";
import ValidatableRecord from "../validatable/record-value";

type RecordValue<
    ValidatorTemplate extends Validator<PropertyKey>,
    Result extends Partial<Record<PropertyKey, Instance>>,
    ValidatableTemplate extends Validatable ,
    MessageTemplate,
> =
    SimpleValidator<
        Record<InferBase<ValidatorTemplate>, any>,
        Record<InferBase<ValidatorTemplate>, any>,
        ValidatableRecord<MessageTemplate, Record<PropertyKey, InferBase<ValidatorTemplate>>, ValidatorTemplate, Result, ValidatableTemplate>>
    // &
    // ValidatorContainer<ValidatorTemplate> &
    // Message<(result:Result)=>MessageTemplate> &
    // Validation<(result:Result)=>ValidatableTemplate>

export default RecordValue;
