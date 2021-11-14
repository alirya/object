import NotEmptyParameters from "./not-empty-parameters";
import NotEmptyParameter, { NotEmptyArgument } from "./not-empty-parameter";
declare namespace NotEmpty {
    const Parameters: typeof NotEmptyParameters;
    const Parameter: typeof NotEmptyParameter;
    type Argument = NotEmptyArgument;
}
export default NotEmpty;
