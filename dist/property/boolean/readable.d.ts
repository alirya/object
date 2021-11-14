import ReadableParameters from "./readable-parameters";
import ReadableParameter, { ReadableArgument } from "./readable-parameter";
declare namespace Readable {
    const Parameters: typeof ReadableParameters;
    const Parameter: typeof ReadableParameter;
    type Argument = ReadableArgument;
}
export default Readable;
