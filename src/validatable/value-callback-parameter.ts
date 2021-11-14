import Validator from "@dikac/t-validator/validator";
import ValidatorValidatable from "@dikac/t-validator/validatable/dynamic";
import Validatable from "@dikac/t-validatable/validatable";
import BaseValue from "@dikac/t-value/value";
import Validators from "../validator/validators/validators";
import Message from "@dikac/t-message/message";
import ValueCallbackParameters from "./value-callback-parameters";

//
// export default ValueCallback;
//
// export class ValueCallbackParameter<
//     ValueType = unknown,
//     MessageType = unknown,
//     RecordType extends Record<PropertyKey, Validator<ValueType>> = Record<PropertyKey, Validator<ValueType>>,
//     Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>,
//     ValidatableType extends Validatable = Validatable
// > implements Value<ValueType, MessageType, RecordType, Result, ValidatableType> {
//
//     #message : (result:Result)=>MessageType;
//     readonly validatable : ValidatableType;
//     readonly validatables : Result;
//    // readonly value: ValueType;
//
//     constructor(
//         readonly value: ValueType,
//         readonly validators : RecordType,
//         readonly map : (value:ValueType, validators:RecordType)=>Result,
//         readonly validation : (result:Result)=>ValidatableType,
//         message : (result:Result)=>MessageType,
//        // {message, value, validators, map, validation} : Argument<ValueType, MessageType, RecordType, Result, ValidatableType>
//     ) {
//
//         this.value = value;
//         this.#message = message;
//         this.validatables = map(value, validators);
//         this.validatable = validation(this.validatables);
//     }
//
//     get valid() : boolean {
//
//         return this.validatable.valid;
//     }
//
//     get messages() : Result {
//
//         return this.validatables;
//     }
//
//     @MemoizeAccessor()
//     get message() : MessageType {
//
//         try {
//
//             return this.#message(this.validatables);
//
//         } catch (e) {
//
//             throw new Error(`error on generating message, ${e}`)
//         }
//
//     }
// }


export type ValueCallbackArgument<
    ValueType = unknown,
    MessageType = unknown,
    RecordType extends Record<PropertyKey, Validator<ValueType>> = Record<PropertyKey, Validator<ValueType>>,
    Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>,
    ValidatableType extends Validatable = Validatable
> =
    BaseValue<ValueType> &
    Validators<RecordType> &
    //{map : (value:ValueType, validator:RecordType)=>Result} &
    {map : (argument:BaseValue<ValueType> & Validators<RecordType>)=>Result} &
    // TODO CHANGE TO VALIDATOR
    {validation: (result:Result)=>ValidatableType} &
    Message<(result:Result)=>MessageType>


export default class ValueCallbackParameter<
    ValueType = unknown,
    MessageType = unknown,
    RecordType extends Record<PropertyKey, Validator<ValueType>> = Record<PropertyKey, Validator<ValueType>>,
    Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>,
    ValidatableType extends Validatable = Validatable
> extends ValueCallbackParameters<ValueType, MessageType, RecordType, Result, ValidatableType> {

    constructor({
            message,
            value,
            validators,
            map,
            validation
        } : ValueCallbackArgument<ValueType, MessageType, RecordType, Result, ValidatableType>
    ) {
        super(value, validators, (value, validators)=>map({value, validators}), validation, message);
    }

}

//
// namespace ValueCallback {
//
//     export const Parameter = ValueCallbackParameter;
//     export const Object = ValueCallbackObject;
//     export type Argument<
//         ValueType = unknown,
//         MessageType = unknown,
//         RecordType extends Record<PropertyKey, Validator<ValueType>> = Record<PropertyKey, Validator<ValueType>>,
//         Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>,
//         ValidatableType extends Validatable = Validatable
//     > = ValueCallbackArgument<
//         ValueType,
//         MessageType,
//         RecordType,
//         Result,
//         ValidatableType
//     >;
// }
