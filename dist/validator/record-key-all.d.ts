import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordKeyAllParameters from "./record-key-all-parameters";
import RecordKeyAllParameter, { RecordKeyAllArgument } from "./record-key-all-parameter";
declare namespace RecordKeyAll {
    const Parameters: typeof RecordKeyAllParameters;
    const Parameter: typeof RecordKeyAllParameter;
    type Argument<ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable, MessageType = unknown> = RecordKeyAllArgument<ValidatorType, ValidatableType, MessageType>;
}
export default RecordKeyAll;
