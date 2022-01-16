import Validator from '@alirya/validator/validator';
import Validatable from '@alirya/validatable/validatable';
import ReturnInfer from '@alirya/validator/validatable/infer-static';
import RecordValue from './record-value';
import ValidatorContainer from '@alirya/validator/validator/validator';
import Message from '@alirya/message/message';
import RecordValueAllParameters from './record-value-all-parameters';

export type RecordValueAllArgument<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
> =
    ValidatorContainer<ValidatorType> &
    Message<(record : Record<PropertyKey, ReturnInfer<ValidatorType>>) => MessageType> &
    {validation: (record : Record<PropertyKey, ReturnInfer<ValidatorType>>) => ValidatableType};

export default function RecordValueAllParameter<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    {
        validator,
        validation,
        message,
    } : RecordValueAllArgument<ValidatorType, ValidatableType, MessageType>
) : RecordValue<ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType> {

    return RecordValueAllParameters(validator, validation, message);
}
