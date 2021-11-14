import ValueValidationParameter, { ValueValidationArgument } from "./value-validation-parameter";
import ValueValidationParameters from "./value-validation-parameters";
declare namespace ValueValidation {
    const Parameter: typeof ValueValidationParameter;
    const Parameters: typeof ValueValidationParameters;
    type Argument = ValueValidationArgument;
}
export default ValueValidation;
