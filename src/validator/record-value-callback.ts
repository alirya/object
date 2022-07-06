import Validator from '@alirya/validator/validator.js';
import InferBase from '@alirya/validator/subject/allow.js';
import Validatable from '@alirya/validatable/validatable.js';
import ValidatableRecordCallback from '../validatable/record-value-callback.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import ValidatorContainer from '@alirya/validator/validator/validator.js';
import MessageType from '@alirya/message/message.js';
import Value from '@alirya/value/value.js';
import SimpleValidator from '@alirya/validator/simple.js';
import InferType from '@alirya/validator/subject/expectation.js';
import ValidatableRecord from '../validatable/record-value.js';

export function RecordValueCallbackParameters<
    ValidatorType extends Validator = Validator,
    Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable = Validatable,
    Message = unknown,
>(
    validator : ValidatorType,
    handler : (value:Partial<Record<PropertyKey, InferBase<ValidatorType>>>, validator : ValidatorType)=>Result,
    validation : (result:Result)=>ValidatableType,
    message : (result:Result)=>Message,
) : RecordValueCallbackReturn<ValidatorType, Result, ValidatableType, Message> {

    return function (value) {

        return new ValidatableRecordCallback.Parameters(value, validator, handler, validation, message);

    } as RecordValueCallbackReturn<ValidatorType, Result, ValidatableType, Message>;
}



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


export function RecordValueCallbackParameter<
    ValidatorType extends Validator = Validator,
    Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable = Validatable,
    Message = unknown,
>(
    {validator, handler, validation, message} : RecordValueCallbackArgument<ValidatorType, Result, ValidatableType, Message>
) : RecordValueCallbackReturn<ValidatorType, Result, ValidatableType, Message> {

    return RecordValueCallbackParameters(
        validator,
        (value, validator) =>handler({value, validator}),
        validation,
        message
    );
}



export type RecordValueCallbackReturn<
    ValidatorTemplate extends Validator,
    Result extends Partial<Record<PropertyKey, Instance>>,
    ValidatableTemplate extends Validatable ,
    MessageTemplate,
    > =
    SimpleValidator<
        Record<PropertyKey, InferBase<ValidatorTemplate>>,
        Record<PropertyKey, InferType<ValidatorTemplate>>,
        ValidatableRecord<MessageTemplate, Record<PropertyKey, InferBase<ValidatorTemplate>>, ValidatorTemplate, Result, ValidatableTemplate>>;




namespace RecordValueCallback {
    export const Parameters = RecordValueCallbackParameters;
    export const Parameter = RecordValueCallbackParameter;
    export type Argument<
        ValidatorType extends Validator = Validator,
        Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
        ValidatableType extends Validatable = Validatable,
        Message = unknown,
    > = RecordValueCallbackArgument<
        ValidatorType,
        Result,
        ValidatableType,
        Message
    >;

    export type Return<
        ValidatorTemplate extends Validator,
        Result extends Partial<Record<PropertyKey, Instance>>,
        ValidatableTemplate extends Validatable ,
        MessageTemplate,
    > = RecordValueCallbackReturn<
        ValidatorTemplate,
        Result,
        ValidatableTemplate,
        MessageTemplate
    >;
}
export default RecordValueCallback;
