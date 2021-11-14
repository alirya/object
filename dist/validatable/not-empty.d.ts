import NotEmptyParameters, { NotEmptyType } from "./not-empty-parameters";
import NotEmptyParameter, { NotEmptyArgument } from "./not-empty-parameter";
declare namespace NotEmpty {
    const Parameters: typeof NotEmptyParameters;
    const Parameter: typeof NotEmptyParameter;
    type Type<ValueType extends object, MessageType> = NotEmptyType<ValueType, MessageType>;
    type Argument<ValueType extends object, MessageType> = NotEmptyArgument<ValueType, MessageType>;
}
export default NotEmpty;
