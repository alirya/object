import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/dynamic";
import RecordValueCallbackParameter, { RecordValueCallbackArgument } from "./record-value-callback-parameter";
import RecordValueCallbackParameters from "./record-value-callback-parameters";
declare namespace RecordValueCallback {
    const Parameter: typeof RecordValueCallbackParameter;
    const Parameters: typeof RecordValueCallbackParameters;
    type Argument<ValidatorType extends Validator = Validator, Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>, ValidatableType extends Validatable = Validatable, Message = unknown> = RecordValueCallbackArgument<ValidatorType, Result, ValidatableType, Message>;
}
export default RecordValueCallback;
