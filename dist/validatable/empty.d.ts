import EmptyParameters, { EmptyType } from "./empty-parameters";
import EmptyParameter from "./empty-parameter";
import { EmptyArgument } from "./empty-parameter";
declare namespace Empty {
    const Parameters: typeof EmptyParameters;
    const Parameter: typeof EmptyParameter;
    type Type<ValueType extends object, MessageType> = EmptyType<ValueType, MessageType>;
    type Argument<ValueType extends object, MessageType> = EmptyArgument<ValueType, MessageType>;
}
export default Empty;
