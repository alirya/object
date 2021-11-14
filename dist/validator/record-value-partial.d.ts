import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordValuePartialParameters from "./record-value-partial-parameters";
import RecordValuePartialParameter, { RecordValuePartialArgument } from "./record-value-partial-parameter";
declare namespace RecordValuePartial {
    const Parameters: typeof RecordValuePartialParameters;
    const Parameter: typeof RecordValuePartialParameter;
    type Argument<ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable, MessageType = unknown> = RecordValuePartialArgument<ValidatorType, ValidatableType, MessageType>;
}
export default RecordValuePartial;
