import Value from "@dikac/t-value/value";
import ValueParameters from "./value-parameters";
import ValueParameter from "./value-parameter";
declare namespace Value {
    const Parameters: typeof ValueParameters;
    const Parameter: typeof ValueParameter;
}
export default Value;
