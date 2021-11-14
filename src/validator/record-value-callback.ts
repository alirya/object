import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/dynamic";
import RecordValueCallbackParameter, {RecordValueCallbackArgument} from "./record-value-callback-parameter";
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


namespace RecordValueCallback {

    export const Parameter = RecordValueCallbackParameter;
    export const Parameters = RecordValueCallbackParameters;
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
}

export default RecordValueCallback;

//
// export function RecordValueCallbackParameter<
//     ValidatorType extends Validator = Validator,
//     Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
//     ValidatableType extends Validatable = Validatable,
//     Message = unknown,
// >(
//     validator : ValidatorType,
//     handler : (value:Partial<Record<PropertyKey, InferBase<ValidatorType>>>, validator : ValidatorType)=>Result,
//     validation : (result:Result)=>ValidatableType,
//     message : (result:Result)=>Message,
//     //{validator, handler, validation, message} : RecordValueCallbackArgument<ValidatorType, Result, ValidatableType, Message>
// ) : RecordValue<ValidatorType, Result, ValidatableType, Message> {
//
//     return function (value) {
//
//         return new ValidatableRecordCallback.Parameter(value, validator, handler, validation, message);
//
//     } as RecordValue<ValidatorType, Result, ValidatableType, Message>
// }
//
// export type RecordValueCallbackArgument<
//     ValidatorType extends Validator = Validator,
//     Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
//     ValidatableType extends Validatable = Validatable,
//     Message = unknown,
// > =
//     ValidatorContainer<ValidatorType> &
//     MessageType<(result:Result)=>Message> &
//     //{handler: (record: Partial<Record<PropertyKey, InferBase<ValidatorType>>>, validator: ValidatorType) => Result} &
//     {handler: (argument : Value<Partial<Record<PropertyKey, InferBase<ValidatorType>>>> & ValidatorContainer<ValidatorType>) => Result} &
//     {validation: (result: Result) => ValidatableType}
//
//
// export function RecordValueCallbackObject<
//     ValidatorType extends Validator = Validator,
//     Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
//     ValidatableType extends Validatable = Validatable,
//     Message = unknown,
// >(
//     // validator : ValidatorType,
//     // handler : (record:Partial<Record<PropertyKey, InferBase<ValidatorType>>>, validator : ValidatorType)=>Result,
//     // validation : (result:Result)=>ValidatableType,
//     // message : (result:Result)=>Message,
//     {validator, handler, validation, message} : RecordValueCallbackArgument<ValidatorType, Result, ValidatableType, Message>
// ) : RecordValue<ValidatorType, Result, ValidatableType, Message> {
//
//     return RecordValueCallbackParameter(
//         validator,
//         (value, validator) =>handler({value, validator}),
//         validation,
//         message
//     );
// }
//
