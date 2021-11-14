import Map from "../../parameter/record/map";
import MethodParameter, {MethodArgument} from "./method-parameter";
import MethodParameters from "./method-parameters";

namespace Method {

    export const Parameter = MethodParameter;
    export const Parameters = MethodParameters;
    export type Argument<
        Argument extends Record<PropertyKey, unknown[]>,
        Type extends Map<Argument>,
    > = MethodArgument<Argument, Type>;
}

export default Method;
