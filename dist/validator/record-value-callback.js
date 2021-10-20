import ValidatableRecordCallback from "../validatable/record-value-callback";
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
export default function RecordValueCallback(validator, handler, validation, message) {
    return function (argument) {
        return new ValidatableRecordCallback(argument, validator, handler, validation, message);
    };
}
//# sourceMappingURL=record-value-callback.js.map