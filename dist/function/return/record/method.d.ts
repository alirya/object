import Map from "../../parameter/record/map";
import MethodParameter, { MethodArgument } from "./method-parameter";
import MethodParameters from "./method-parameters";
declare namespace Method {
    const Parameter: typeof MethodParameter;
    const Parameters: typeof MethodParameters;
    type Argument<Argument extends Record<PropertyKey, unknown[]>, Type extends Map<Argument>> = MethodArgument<Argument, Type>;
}
export default Method;
