import Validator from '@alirya/validator/validator';
import Validatable from '@alirya/validatable/validatable';
import ReturnInfer from '@alirya/validator/validatable/infer-static';
import RecordKey from './record-key';
import ValidatorContainer from '@alirya/validator/validator/validator';
import Message from '@alirya/message/message';
import RecordKeyAllParameters from './record-key-all-parameters';

export type RecordKeyAllArgument<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
> =
    ValidatorContainer<ValidatorType> &
    {validation : (record:Record<PropertyKey, ReturnInfer<ValidatorType>>)=>ValidatableType} &
    Message<(record:Record<PropertyKey, ReturnInfer<ValidatorType>>)=>MessageType>;

export default function RecordKeyAllParameter<
    ValidatorType extends Validator = Validator,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    {
        validator,
        validation,
        message,
    } : RecordKeyAllArgument<ValidatorType, ValidatableType, MessageType>
) : RecordKey<ValidatorType, Record<PropertyKey, ReturnInfer<ValidatorType>>, ValidatableType, MessageType> {

    return RecordKeyAllParameters(validator, validation, message);
}














