import Validator from "@dikac/t-validator/validator";
import InferBase from "@dikac/t-validator/base/infer";
import InferType from "@dikac/t-validator/type/infer";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableRecordCallback from "../validatable/record-value-callback";
import ValidatableRecordValue from "../validatable/record-value";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Replace from "@dikac/t-validatable/boolean/replace";
import RecordValue from "./record-value";
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

export default function RecordValueCallback<
    ValidatorType extends Validator = Validator,
    Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable = Validatable,
    Message = unknown,
>(
    validator : ValidatorType,
    handler : (record:Partial<Record<PropertyKey, InferBase<ValidatorType>>>, validator : ValidatorType)=>Result,
    validation : (result:Result)=>ValidatableType,
    message : (result:Result)=>Message
) : RecordValue<ValidatorType, Result, ValidatableType, Message> {

    return function <
        Argument extends Record<PropertyKey, InferBase<ValidatorType>>,
        ValueType extends Record<PropertyKey, InferType<ValidatorType>>
    >(argument: Argument|ValueType) {

        return new ValidatableRecordCallback(argument, validator, handler, validation, message);

    } as RecordValue<ValidatorType, Result, ValidatableType, Message>
}

