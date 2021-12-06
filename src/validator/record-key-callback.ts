import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import RecordKeyCallbackParameters from "./record-key-callback-parameters";
import RecordKeyCallbackParameter, {RecordKeyCallbackArgument} from "./record-key-callback-parameter";


namespace RecordKeyCallback {

    export const Parameters = RecordKeyCallbackParameters;
    export const Parameter = RecordKeyCallbackParameter;
    export type Argument<
        ValidatorType extends Validator<PropertyKey> = Validator<PropertyKey>,
        Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>,
        ValidatableType extends Validatable = Validatable,
        MessageType = unknown,
    > = RecordKeyCallbackArgument<
        ValidatorType,
        Result,
        ValidatableType,
        MessageType
    >;
}
export default RecordKeyCallback;

