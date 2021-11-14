import SetGetterParameters from "./set-getter-parameters";
import SetGetterParameter, { SetGetterArgument } from "./set-getter-parameter";
declare namespace SetGetter {
    const Parameters: typeof SetGetterParameters;
    const Parameter: typeof SetGetterParameter;
    type Argument<This extends object, Type> = SetGetterArgument<This, Type>;
}
export default SetGetter;
