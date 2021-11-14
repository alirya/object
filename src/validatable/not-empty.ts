import NotEmptyParameters, {NotEmptyType} from "./not-empty-parameters";
import NotEmptyParameter, {NotEmptyArgument} from "./not-empty-parameter";

namespace NotEmpty {

    export const Parameters = NotEmptyParameters;
    export const Parameter = NotEmptyParameter;

    export type Type<
        ValueType extends object,
        MessageType
    > = NotEmptyType<
        ValueType,
        MessageType
    >

    export type Argument<
        ValueType extends object,
        MessageType
    > = NotEmptyArgument<
        ValueType,
        MessageType
    >;
}

export default NotEmpty;
