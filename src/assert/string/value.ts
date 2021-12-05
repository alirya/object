import Value from "@dikac/t-value/value";
import ValueParameter, {ValueArgument} from "./value-parameter";
import ValueParameters from "./value-parameters";

namespace Value {

    export const Parameter = ValueParameter;
    export const Parameters = ValueParameters;
    export type Argument = ValueArgument;
}
export default Value;
