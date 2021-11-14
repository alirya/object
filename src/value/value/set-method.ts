import SetMethodParameters from "./set-method-parameters";
import SetMethodParameter, {SetMethodArgument} from "./set-method-parameter";


namespace SetMethod {

    export const Parameters = SetMethodParameters;
    export const Parameter = SetMethodParameter;
    export type Argument<
        This extends object,
        Type,
        > = SetMethodArgument<
        This,
        Type
        >;
}
export default SetMethod;
