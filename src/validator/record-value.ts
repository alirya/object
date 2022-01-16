import SimpleValidator from "@alirya/validator/simple";
import Validator from "@alirya/validator/validator";
import InferBase from "@alirya/validator/subject/allow";
import InferType from "@alirya/validator/subject/expectation";
import Validatable from "@alirya/validatable/validatable";
import ValidatableRecord from "../validatable/record-value";
import Instance from "@alirya/validator/validatable/validatable";

type RecordValue<
    ValidatorTemplate extends Validator,
    Result extends Partial<Record<PropertyKey, Instance>>,
    ValidatableTemplate extends Validatable ,
    MessageTemplate,
> =
    SimpleValidator<
        Record<PropertyKey, InferBase<ValidatorTemplate>>,
        Record<PropertyKey, InferType<ValidatorTemplate>>,
        ValidatableRecord<MessageTemplate, Record<PropertyKey, InferBase<ValidatorTemplate>>, ValidatorTemplate, Result, ValidatableTemplate>>

export default RecordValue;
