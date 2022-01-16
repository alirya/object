import Validator from '@alirya/validator/validator';
import InferBase from '@alirya/validator/subject/allow';
import Validatable from '@alirya/validatable/validatable';
import Instance from '@alirya/validator/validatable/validatable';
import RecordValue from './record-value';
import ValidatorContainer from '@alirya/validator/validator/validator';
import MessageType from '@alirya/message/message';
import Value from '@alirya/value/value';
import RecordValueCallbackParameters from './record-value-callback-parameters';

export type RecordValueCallbackArgument<
    ValidatorType extends Validator = Validator,
    Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable = Validatable,
    Message = unknown,
> =
    ValidatorContainer<ValidatorType> &
    MessageType<(result:Result)=>Message> &
    {handler: (argument : Value<Partial<Record<PropertyKey, InferBase<ValidatorType>>>> & ValidatorContainer<ValidatorType>) => Result} &
    {validation: (result: Result) => ValidatableType};


export default function RecordValueCallbackParameter<
    ValidatorType extends Validator = Validator,
    Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable = Validatable,
    Message = unknown,
>(
    {validator, handler, validation, message} : RecordValueCallbackArgument<ValidatorType, Result, ValidatableType, Message>
) : RecordValue<ValidatorType, Result, ValidatableType, Message> {

    return RecordValueCallbackParameters(
        validator,
        (value, validator) =>handler({value, validator}),
        validation,
        message
    );
}

