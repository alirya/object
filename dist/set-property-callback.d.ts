import SetPropertyCallbackParameters, { SetPropertyCallbackTypeDynamic, SetPropertyCallbackTypeStatic } from "./set-property-callback-parameters";
import SetPropertyCallbackParameter, { SetPropertyCallbackArgumentDynamic, SetPropertyCallbackArgumentStatic } from "./set-property-callback-parameter";
declare namespace SetPropertyCallback {
    const Parameters: typeof SetPropertyCallbackParameters;
    const Parameter: typeof SetPropertyCallbackParameter;
    type ArgumentStatic<This extends object, Key extends keyof This> = SetPropertyCallbackArgumentStatic<This, Key>;
    type ArgumentDynamic<This extends object, Key extends PropertyKey, Type> = SetPropertyCallbackArgumentDynamic<This, Key, Type>;
    type TypeStatic<This extends object, Key extends keyof This> = SetPropertyCallbackTypeStatic<This, Key>;
    type TypeDynamic<This extends object, Key extends PropertyKey, Type> = SetPropertyCallbackTypeDynamic<This, Key, Type>;
}
export default SetPropertyCallback;
