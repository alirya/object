import FromObjectParameters from "./from-object-parameters";
import FromObjectParameter, { FromObjectArgument } from "./from-object-parameter";
declare namespace FromObject {
    const Parameters: typeof FromObjectParameters;
    const Parameter: typeof FromObjectParameter;
    type Argument = FromObjectArgument;
}
export default FromObject;
