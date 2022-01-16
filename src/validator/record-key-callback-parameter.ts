import Validator from '@alirya/validator/validator';
import Validatable from '@alirya/validatable/validatable';
import RecordKey from './record-key';
import ValidatorValidatable from '@alirya/validator/validatable/validatable';
import InferBase from '@alirya/validator/subject/allow';
import ValidatorContainer from '@alirya/validator/validator/validator';
import Message from '@alirya/message/message';
import Value from '@alirya/value/value';
import RecordKeyCallbackParameters from './record-key-callback-parameters';

export type RecordKeyCallbackArgument<
    ValidatorType extends Validator<PropertyKey> = Validator<PropertyKey>,
    Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
> =
    ValidatorContainer<ValidatorType> &
    Message<(result:Result)=>MessageType> &
    { handler: (argument : Value<Record<InferBase<ValidatorType>, any>> & ValidatorContainer<ValidatorType>) => Result } &
    { validation: (result: Result) => ValidatableType }
;

export default function RecordKeyCallbackParameter<
    ValidatorType extends Validator<PropertyKey> = Validator<PropertyKey>,
    Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    {   validator,
        handler,
        validation,
        message
    } : RecordKeyCallbackArgument<ValidatorType, Result, ValidatableType, MessageType>
) : RecordKey<ValidatorType, Result, ValidatableType, MessageType> {

    return RecordKeyCallbackParameters(
        validator,
        (value, validator) => handler({value, validator}),
        validation,
        message
    );
}


