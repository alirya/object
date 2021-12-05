import SetGetterParameters from "./set-getter-parameters";
import SetGetterParameter, {SetGetterArgument} from "./set-getter-parameter";

namespace SetGetter {

    export const Parameters = SetGetterParameters;
    export const Parameter = SetGetterParameter;
    export type Argument<This extends object, Type> = SetGetterArgument<This, Type>;
}
export default SetGetter;
