import EmptyParameter, { EmptyArgument } from "./empty-parameter";
import EmptyParameters from "./empty-parameters";
declare namespace Empty {
    const Parameter: typeof EmptyParameter;
    const Parameters: typeof EmptyParameters;
    type Argument = EmptyArgument;
}
export default Empty;
