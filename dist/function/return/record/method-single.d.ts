import MapSingle from "../../parameter/record/map-single";
import MethodSingleParameter, { MethodSingleArgument } from "./method-single-parameter";
import MethodSingleParameters from "./method-single-parameters";
/**
 * call an record of function or object, by using key from {@param argument} and it's value
 * as first argument
 *
 * @param object
 * @param argument
 */
declare namespace MethodSingle {
    const Parameter: typeof MethodSingleParameter;
    const Parameters: typeof MethodSingleParameters;
    type Argument<Argument extends object, Type extends MapSingle<Argument>> = MethodSingleArgument<Argument, Type>;
}
export default MethodSingle;
