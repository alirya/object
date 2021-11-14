import ValueParameter, { ValueArgument } from "./value-parameter";
import ValueParameters from "./value-parameters";
declare namespace Value {
    const Parameter: typeof ValueParameter;
    const Parameters: typeof ValueParameters;
    type Argument = ValueArgument;
}
export default Value;
