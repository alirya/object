import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordValueAllParameters from "./record-value-all-parameters";
import RecordValueAllParameter, {RecordValueAllArgument} from "./record-value-all-parameter";


namespace RecordValueAll {

    export const Parameters = RecordValueAllParameters;
    export const Parameter = RecordValueAllParameter;
    export type Argument<
        ValidatorType extends Validator = Validator,
        ValidatableType extends Validatable = Validatable,
        MessageType = unknown,
    > = RecordValueAllArgument<
        ValidatorType,
        ValidatableType,
        MessageType
    >;
}

export default RecordValueAll;
