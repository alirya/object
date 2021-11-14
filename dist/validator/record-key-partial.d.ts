import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordKeyPartialParameters from "./record-key-partial-parameters";
import RecordKeyPartialParameter, { RecordKeyPartialArgument } from "./record-key-partial-parameter";
declare namespace RecordKeyPartial {
    const Parameters: typeof RecordKeyPartialParameters;
    const Parameter: typeof RecordKeyPartialParameter;
    type Argument<ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable, MessageType = unknown> = RecordKeyPartialArgument<ValidatorType, ValidatableType, MessageType>;
}
export default RecordKeyPartial;
