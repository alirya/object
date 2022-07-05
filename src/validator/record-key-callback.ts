import Validator from '@alirya/validator/validator';
import Validatable from '@alirya/validatable/validatable';
import ValidatableRecordCallback from '../validatable/record-value-callback';
import ValidatorValidatable from '@alirya/validator/validatable/validatable';
import InferBase from '@alirya/validator/subject/allow';
import ValidatorContainer from '@alirya/validator/validator/validator';
import Message from '@alirya/message/message';
import Value from '@alirya/value/value';
import SimpleValidator from '@alirya/validator/simple';
import Instance from '@alirya/validator/validatable/validatable';
import InferExpectation from '@alirya/validator/subject/expectation';
import InferSubject from '@alirya/validator/subject/subject';
import ValidatableRecord from '../validatable/record-value';

export function RecordKeyCallbackParameters<
    ValidatorType extends Validator<PropertyKey> = Validator<PropertyKey>,
    Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validator : ValidatorType,
    handler : (value:Record<InferBase<ValidatorType>, any>, validator:ValidatorType)=>Result,
    validation : (result:Result)=>ValidatableType,
    message : (result:Result)=>MessageType,
) : RecordKeyCallbackReturn<ValidatorType, Result, ValidatableType, MessageType> {

    return function (value) {

        return new ValidatableRecordCallback.Parameters(value, validator, handler, validation, message);

    } as RecordKeyCallbackReturn<ValidatorType, Result, ValidatableType, MessageType>;
}

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

export function RecordKeyCallbackParameter<
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
) : RecordKeyCallbackReturn<ValidatorType, Result, ValidatableType, MessageType> {

    return RecordKeyCallbackParameters(
        validator,
        (value, validator) => handler({value, validator}),
        validation,
        message
    );
}



export type RecordKeyCallbackReturn<
    ValidatorTemplate extends Validator<PropertyKey>,
    Result extends Partial<Record<PropertyKey, Instance>>,
    ValidatableTemplate extends Validatable ,
    MessageTemplate,
    > =
    SimpleValidator<
        Record<InferBase<ValidatorTemplate>, any>,
        Record<InferExpectation<ValidatorTemplate>, any>,
        ValidatableRecord<MessageTemplate, Record<PropertyKey, InferSubject<ValidatorTemplate>>, ValidatorTemplate, Result, ValidatableTemplate>>;



namespace RecordKeyCallback {
    export const Parameters = RecordKeyCallbackParameters;
    export const Parameter = RecordKeyCallbackParameter;
    export type Return<
        ValidatorTemplate extends Validator<PropertyKey>,
        Result extends Partial<Record<PropertyKey, Instance>>,
        ValidatableTemplate extends Validatable,
        MessageTemplate,
    > = RecordKeyCallbackReturn<
        ValidatorTemplate,
        Result,
        ValidatableTemplate,
        MessageTemplate
    >;

    export type Argument<
        ValidatorType extends Validator<PropertyKey> = Validator<PropertyKey>,
        Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>,
        ValidatableType extends Validatable = Validatable,
        MessageType = unknown,
    > = RecordKeyCallbackArgument<
        ValidatorType,
        Result,
        ValidatableType,
        MessageType
    >;
}
export default RecordKeyCallback;
