import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordValuePartialParameters from "./record-value-partial-parameters";
import RecordValuePartialParameter, {RecordValuePartialArgument} from "./record-value-partial-parameter";

namespace RecordValuePartial {

    export const Parameters = RecordValuePartialParameters;
    export const Parameter = RecordValuePartialParameter;
    export type Argument<
        ValidatorType extends Validator = Validator,
        ValidatableType extends Validatable = Validatable,
        MessageType = unknown,
    > = RecordValuePartialArgument<
        ValidatorType,
        ValidatableType,
        MessageType
    >;
}
export default RecordValuePartial;
