import Validator from "@dikac/t-validator/validator";
import InferBase from "@dikac/t-validator/subject/allow";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/validatable";
import RecordValue from "./record-value";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import MessageType from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import RecordValueCallbackParameters from "./record-value-callback-parameters";
//
// export default class RecordValueCallback<
//     ValidatorType extends Validator = Validator,
//     Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
//     ValidatableType extends Validatable = Validatable,
//     Message = unknown,
// > implements RecordValue<ValidatorType, Result, ValidatableType, Message> {
//
//     constructor(
//         public validator : ValidatorType,
//         public handler : (record:Partial<Record<PropertyKey, InferBase<ValidatorType>>>, validator : ValidatorType)=>Result,
//         public validation : (result:Result)=>ValidatableType,
//         public message : (result:Result)=>Message
//     ) {
//     }
//
//     validate<Argument extends Record<PropertyKey, InferType<ValidatorType>>>(argument: Argument)
//         : Replace<ValidatableRecordValue<Message, Argument, ValidatorType, Result, ValidatableType>, true>
//
//     validate<Argument extends Record<PropertyKey, InferBase<ValidatorType>>>(argument: Argument)
//         : Return<Record<PropertyKey, InferBase<ValidatorType>>, Argument, Record<PropertyKey, InferType<ValidatorType>>, ValidatableRecordValue<Message, Argument, ValidatorType, Result, ValidatableType>>
//
//     validate<Argument extends Record<PropertyKey, InferBase<ValidatorType>>>(argument: Argument)
//         : Replace<ValidatableRecordValue<Message, Argument, ValidatorType, Result, ValidatableType>, true> |
//         Return<Record<PropertyKey, InferBase<ValidatorType>>, Argument, Record<PropertyKey, InferType<ValidatorType>>, ValidatableRecordValue<Message, Argument, ValidatorType, Result, ValidatableType>>
//     {
//         return <Replace<ValidatableRecordValue<Message, Argument, ValidatorType, Result, ValidatableType>, true> |
//             Return<Record<PropertyKey, InferBase<ValidatorType>>, Argument, Record<PropertyKey, InferType<ValidatorType>>, ValidatableRecordValue<Message, Argument, ValidatorType, Result, ValidatableType>>>
//             new ValidatableRecordCallback(argument, this.validator, this.handler, this.validation, this.message);
//     }
// }


export type RecordValueCallbackArgument<
    ValidatorType extends Validator = Validator,
    Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable = Validatable,
    Message = unknown,
> =
    ValidatorContainer<ValidatorType> &
    MessageType<(result:Result)=>Message> &
    //{handler: (record: Partial<Record<PropertyKey, InferBase<ValidatorType>>>, validator: ValidatorType) => Result} &
    {handler: (argument : Value<Partial<Record<PropertyKey, InferBase<ValidatorType>>>> & ValidatorContainer<ValidatorType>) => Result} &
    {validation: (result: Result) => ValidatableType}


export default function RecordValueCallbackParameter<
    ValidatorType extends Validator = Validator,
    Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable = Validatable,
    Message = unknown,
>(
    // validator : ValidatorType,
    // handler : (record:Partial<Record<PropertyKey, InferBase<ValidatorType>>>, validator : ValidatorType)=>Result,
    // validation : (result:Result)=>ValidatableType,
    // message : (result:Result)=>Message,
    {validator, handler, validation, message} : RecordValueCallbackArgument<ValidatorType, Result, ValidatableType, Message>
) : RecordValue<ValidatorType, Result, ValidatableType, Message> {

    return RecordValueCallbackParameters(
        validator,
        (value, validator) =>handler({value, validator}),
        validation,
        message
    );
}

