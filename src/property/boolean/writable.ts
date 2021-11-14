import ReadableParameter, {WritableArgument} from "./writable-parameter";
import ReadableParameters from "./writable-parameters";


namespace Writable {

    export const Parameters = ReadableParameters;
    export const Parameter = ReadableParameter;
    export type Argument = WritableArgument;
}

export default Writable;
