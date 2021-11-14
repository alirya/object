import ObjectParameter, { ObjectArgument } from "./object-parameter";
import ObjectParameters from "./object-parameters";
declare namespace Object_ {
    const Parameter: typeof ObjectParameter;
    const Parameters: typeof ObjectParameters;
    type Argument<MessageType, Argument> = ObjectArgument<MessageType, Argument>;
}
export default Object_;
