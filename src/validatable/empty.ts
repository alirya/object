import EmptyParameters, {EmptyType} from "./empty-parameters";
import EmptyParameter from "./empty-parameter";
import {EmptyArgument} from "./empty-parameter";


namespace Empty {

    export const Parameters = EmptyParameters;
    export const Parameter = EmptyParameter;

    export type Type<
        ValueType extends object,
        MessageType
    > = EmptyType<
        ValueType,
        MessageType
    >

    export type Argument<
        ValueType extends object,
        MessageType
    > = EmptyArgument<
        ValueType,
        MessageType
    >;
}

export default Empty;

