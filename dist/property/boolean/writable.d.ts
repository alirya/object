import ReadableParameter, { WritableArgument } from "./writable-parameter";
import ReadableParameters from "./writable-parameters";
declare namespace Writable {
    const Parameters: typeof ReadableParameters;
    const Parameter: typeof ReadableParameter;
    type Argument = WritableArgument;
}
export default Writable;
