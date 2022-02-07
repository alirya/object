import Validator from '@alirya/validator/validator';
import SimpleValidator from '@alirya/validator/simple';
import Validatable from '@alirya/validatable/validatable';
import Instance from '@alirya/validator/validatable/validatable';
import InferBase from '@alirya/validator/subject/allow';
import InferExpectation from '@alirya/validator/subject/expectation';
import InferSubject from '@alirya/validator/subject/subject';
import ValidatableRecord from '../validatable/record-value';

type RecordKey<
    ValidatorTemplate extends Validator<PropertyKey>,
    Result extends Partial<Record<PropertyKey, Instance>>,
    ValidatableTemplate extends Validatable ,
    MessageTemplate,
> =
    SimpleValidator<
        Record<InferBase<ValidatorTemplate>, any>,
        Record<InferExpectation<ValidatorTemplate>, any>,
        ValidatableRecord<MessageTemplate, Record<PropertyKey, InferSubject<ValidatorTemplate>>, ValidatorTemplate, Result, ValidatableTemplate>>;

export default RecordKey;
