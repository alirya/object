import SetMethodParameters from "./set-method-parameters";
import SetMethodParameter, { SetMethodArgument } from "./set-method-parameter";
declare namespace SetMethod {
    const Parameters: typeof SetMethodParameters;
    const Parameter: typeof SetMethodParameter;
    type Argument<This extends object, Type> = SetMethodArgument<This, Type>;
}
export default SetMethod;
