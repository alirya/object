import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordValueAllParameters from "./record-value-all-parameters";
import RecordValueAllParameter, { RecordValueAllArgument } from "./record-value-all-parameter";
declare namespace RecordValueAll {
    const Parameters: typeof RecordValueAllParameters;
    const Parameter: typeof RecordValueAllParameter;
    type Argument<ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable, MessageType = unknown> = RecordValueAllArgument<ValidatorType, ValidatableType, MessageType>;
}
export default RecordValueAll;
