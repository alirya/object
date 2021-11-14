import SetGetterCallbackParameters, { SetGetterCallbackTypeDynamic, SetGetterCallbackTypeStatic } from "./set-getter-callback-parameters";
import SetGetterCallbackParameter, { SetGetterCallbackArgumentDynamic, SetGetterCallbackArgumentStatic } from "./set-getter-callback-parameter";
declare namespace SetGetterCallback {
    const Parameters: typeof SetGetterCallbackParameters;
    const Parameter: typeof SetGetterCallbackParameter;
    type Argument1<This extends object, Key extends keyof This> = SetGetterCallbackArgumentStatic<This, Key>;
    type Argument2<This extends object, Key extends PropertyKey, Type> = SetGetterCallbackArgumentDynamic<This, Key, Type>;
    type Type1<This extends object, Key extends keyof This> = SetGetterCallbackTypeStatic<This, Key>;
    type Type2<This extends object, Key extends PropertyKey, Type> = SetGetterCallbackTypeDynamic<This, Key, Type>;
}
export default SetGetterCallback;
