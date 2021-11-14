import ObjectParameter, { ObjectArgument } from "./object-parameter";
import ObjectParameters from "./object-parameters";
declare namespace Object_ {
    const Parameter: typeof ObjectParameter;
    const Parameters: typeof ObjectParameters;
    type Argument = ObjectArgument;
}
export default Object_;
