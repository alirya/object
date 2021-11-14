import ObjectParameters from "./object-parameters";
import ObjectParameter, { ObjectArgument } from "./object-parameter";
declare namespace Object_ {
    const Parameters: typeof ObjectParameters;
    const Parameter: typeof ObjectParameter;
    type Argument = ObjectArgument;
}
export default Object_;
