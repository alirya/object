import Validator from "@alirya/validator/validator";
import SimpleValidator from "@alirya/validator/simple";
import Validatable from "@alirya/validatable/validatable";
import Instance from "@alirya/validator/validatable/validatable";
import InferBase from "@alirya/validator/subject/allow";
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

export default RecordValue;
