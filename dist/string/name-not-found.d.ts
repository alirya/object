import NameNotFoundParameters from "./name-not-found-parameters";
import NameNotFoundParameter, { NameNotFoundArgument } from "./name-not-found-parameter";
declare namespace NameNotFound {
    const Parameters: typeof NameNotFoundParameters;
    const Parameter: typeof NameNotFoundParameter;
    type Argument = NameNotFoundArgument;
}
export default NameNotFound;
