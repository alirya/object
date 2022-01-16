import Validator from "@alirya/validator/validator";
import Validatable from "@alirya/validatable/validatable";
import ValidatableRecordCallback from "../validatable/record-value-callback-parameters";
import RecordKey from "./record-key";
import ValidatorValidatable from "@alirya/validator/validatable/validatable";
import InferBase from "@alirya/validator/subject/allow";

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
) : RecordKey<ValidatorType, Result, ValidatableType, MessageType> {

    return function (value) {

        return new ValidatableRecordCallback(value, validator, handler, validation, message);

    } as RecordKey<ValidatorType, Result, ValidatableType, MessageType>
}

