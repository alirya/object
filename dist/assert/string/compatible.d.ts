import CompatibleParameter, { CompatibleArgument } from "./compatible-parameter";
import CompatibleParameters from "./compatible-parameters";
declare namespace Compatible {
    const Parameter: typeof CompatibleParameter;
    const Parameters: typeof CompatibleParameters;
    type Argument = CompatibleArgument;
}
export default Compatible;
