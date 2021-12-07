import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableRecordCallback from "../validatable/record-value-callback-parameters";
import RecordKey from "./record-key";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import InferBase from "@dikac/t-validator/subject/allow";


// export default RecordKeyCallback;
// namespace RecordKeyCallback {
//
//     export const Parameter = RecordKeyCallbackParameter;
//     export const Object = RecordKeyCallbackObject;
//     export type Argument<
//         ValidatorType extends Validator<PropertyKey> = Validator<PropertyKey>,
//         Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>,
//         ValidatableType extends Validatable = Validatable,
//         MessageType = unknown,
//     > = RecordKeyCallbackArgument<
//         ValidatorType,
//         Result,
//         ValidatableType,
//         MessageType
//     >;
// }


//
// export default class RecordKeyCallback<
//     ValidatorType extends Validator<PropertyKey> = Validator<PropertyKey>,
//     Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>,
//     ValidatableType extends Validatable = Validatable,
//     MessageType = unknown,
// > implements RecordKey< ValidatorType, Result, ValidatableType, MessageType> {
//
//     constructor(
//         public validator : ValidatorType,
//         public handler : (base:Record<InferBase<ValidatorType>, any>, validator:ValidatorType)=>Result,
//         public validation : (result:Result)=>ValidatableType,
//         public message : (result:Result)=>MessageType
//     ) {
//     }
//
//     validate<Argument extends Record<InferType<ValidatorType>, any>>(
//         argument: Argument
//     ) : Replace<ValidatableRecord<MessageType, Argument, ValidatorType, Result, ValidatableType>, true>
//
//     validate<Argument extends Record<InferBase<ValidatorType>, any>>(
//         argument: Argument
//     ) : Return<Record<InferBase<ValidatorType>, any>, Argument, Record<InferBase<ValidatorType>, any>, ValidatableRecord<MessageType, Record<InferBase<ValidatorType>, any>, ValidatorType, Result, ValidatableType>>
//
//     validate<Argument extends Record<InferBase<ValidatorType>, any>>(
//         argument: Argument
//     ) {
//
//         return new ValidatableRecordCallback(argument, this.validator, this.handler, this.validation, this.message) as
//             Return<Record<InferBase<ValidatorType>, any>, Argument, Record<InferBase<ValidatorType>, any>, ValidatableRecord<MessageType, Record<InferBase<ValidatorType>, any>, ValidatorType, Result, ValidatableType>>;
//     }
// }

export default function RecordKeyCallbackParameters<
    ValidatorType extends Validator<PropertyKey> = Validator<PropertyKey>,
    Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    validator : ValidatorType,
    handler : (value:Record<InferBase<ValidatorType>, any>, validator:ValidatorType)=>Result,
    validation : (result:Result)=>ValidatableType,
    message : (result:Result)=>MessageType,
    // {   validator,
    //     handler,
    //     validation,
    //     message
    // } : Argument<ValidatorType, Result, ValidatableType, MessageType>
) : RecordKey<ValidatorType, Result, ValidatableType, MessageType> {

    return function (value) {

        return new ValidatableRecordCallback(value, validator, handler, validation, message);

    } as RecordKey<ValidatorType, Result, ValidatableType, MessageType>
}

//
//
//
// export type RecordKeyCallbackArgument<
//     ValidatorType extends Validator<PropertyKey> = Validator<PropertyKey>,
//     Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>,
//     ValidatableType extends Validatable = Validatable,
//     MessageType = unknown,
// > =
//     ValidatorContainer<ValidatorType> &
//     Message<(result:Result)=>MessageType> &
//     //{ handler: (base: Record<InferBase<ValidatorType>, any>, validator: ValidatorType) => Result } &
//     { handler: (argument : Value<Record<InferBase<ValidatorType>, any>> & ValidatorContainer<ValidatorType>) => Result } &
//     { validation: (result: Result) => ValidatableType }
// ;
//
// export function RecordKeyCallbackObject<
//     ValidatorType extends Validator<PropertyKey> = Validator<PropertyKey>,
//     Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>,
//     ValidatableType extends Validatable = Validatable,
//     MessageType = unknown,
// >(
//    // validator : ValidatorType,
//    // handler : (base:Record<InferBase<ValidatorType>, any>, validator:ValidatorType)=>Result,
//    // validation : (result:Result)=>ValidatableType,
//    // message : (result:Result)=>MessageType,
//     {   validator,
//         handler,
//         validation,
//         message
//     } : RecordKeyCallbackArgument<ValidatorType, Result, ValidatableType, MessageType>
// ) : RecordKey<ValidatorType, Result, ValidatableType, MessageType> {
//
//     return RecordKeyCallbackParameter(
//         validator,
//         (value, validator) => handler({value, validator}),
//         validation,
//         message
//     );
// }


