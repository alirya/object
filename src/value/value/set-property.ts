import SetPropertyParameter, {SetPropertyArgument} from "./set-property-parameter";
import SetPropertyParameters from "./set-property-parameters";

/**
 * set {@param value} for getter value for {@param object}
 * should be used inside getter callback
 *
 * @param object
 *
 * @param property
 * getter key
 *
 * @param value
 * value tobe memoized
 *
 * @param writable
 *
 * @param configurable {@default true}
 */



namespace SetProperty {

    export const Parameter = SetPropertyParameter;
    export const Parameters = SetPropertyParameters;
    export type Argument<This extends object, Type> = SetPropertyArgument<This, Type>;
}

export default SetProperty;
