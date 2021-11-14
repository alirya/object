import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordKeyAllParameters from "./record-key-all-parameters";
import RecordKeyAllParameter, {RecordKeyAllArgument} from "./record-key-all-parameter";

namespace RecordKeyAll {

    export const Parameters = RecordKeyAllParameters;
    export const Parameter = RecordKeyAllParameter;
    export type Argument<
        ValidatorType extends Validator = Validator,
        ValidatableType extends Validatable = Validatable,
        MessageType = unknown,
    > = RecordKeyAllArgument<
        ValidatorType,
        ValidatableType,
        MessageType
    >;
}

export default RecordKeyAll;







