import Validator from '@alirya/validator/validator';
import Validatable from '@alirya/validatable/validatable';
import ReturnInfer from '@alirya/validator/validatable/infer-static';
import RecordValue from './record-value';
import ValidatorContainer from '@alirya/validator/validator/validator';
import Message from '@alirya/message/message';
import RecordValuePartialParameters from './record-value-partial-parameters';

export type RecordValuePartialArgument<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
> =
    ValidatorContainer<ValidatorType> &
    Message<(record : Record<PropertyKey, ReturnInfer<ValidatorType>>)=>MessageType> &
    {validation: (record : Record<PropertyKey, ReturnInfer<ValidatorType>>)=>ValidatableType}
    ;

export default function RecordValuePartialParameter<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
> (
    {
        validator,
        validation,
        message,
    } : RecordValuePartialArgument<ValidatorType, ValidatableType, MessageType>
) : RecordValue<ValidatorType, Partial<Record<PropertyKey, ReturnInfer<ValidatorType>>>, ValidatableType, MessageType>  {

    return RecordValuePartialParameters(validator, validation, message);
}
