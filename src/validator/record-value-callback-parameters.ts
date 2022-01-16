import Validator from "@alirya/validator/validator";
import InferBase from "@alirya/validator/subject/allow";
import Validatable from "@alirya/validatable/validatable";
import ValidatableRecordCallback from "../validatable/record-value-callback-parameters";
import Instance from "@alirya/validator/validatable/validatable";
import RecordValue from "./record-value";

export default function RecordValueCallbackParameters<
    ValidatorType extends Validator = Validator,
    Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable = Validatable,
    Message = unknown,
>(
    validator : ValidatorType,
    handler : (value:Partial<Record<PropertyKey, InferBase<ValidatorType>>>, validator : ValidatorType)=>Result,
    validation : (result:Result)=>ValidatableType,
    message : (result:Result)=>Message,
) : RecordValue<ValidatorType, Result, ValidatableType, Message> {

    return function (value) {

        return new ValidatableRecordCallback(value, validator, handler, validation, message);

    } as RecordValue<ValidatorType, Result, ValidatableType, Message>
}

