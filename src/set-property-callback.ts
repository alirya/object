import SetPropertyCallbackParameters, {
    SetPropertyCallbackTypeDynamic,
    SetPropertyCallbackTypeStatic
} from "./set-property-callback-parameters";
import SetPropertyCallbackParameter, {
    SetPropertyCallbackArgumentDynamic,
    SetPropertyCallbackArgumentStatic
} from "./set-property-callback-parameter";


namespace SetPropertyCallback {

    export const Parameters = SetPropertyCallbackParameters;
    export const Parameter = SetPropertyCallbackParameter;

    export type ArgumentStatic<This extends object, Key extends keyof This> = SetPropertyCallbackArgumentStatic<This, Key>;

    export type ArgumentDynamic<This extends object, Key extends PropertyKey, Type> = SetPropertyCallbackArgumentDynamic<This, Key, Type>;

    export type TypeStatic<This extends object, Key extends keyof This> = SetPropertyCallbackTypeStatic<This, Key>;

    export type TypeDynamic<This extends object, Key extends PropertyKey, Type> = SetPropertyCallbackTypeDynamic<This, Key, Type>;
}

export default SetPropertyCallback;
