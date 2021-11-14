import SetGetterCallbackParameters, {
    SetGetterCallbackTypeDynamic,
    SetGetterCallbackTypeStatic
} from "./set-getter-callback-parameters";
import SetGetterCallbackParameter, {SetGetterCallbackArgumentDynamic, SetGetterCallbackArgumentStatic} from "./set-getter-callback-parameter";



namespace SetGetterCallback {

    export const Parameters = SetGetterCallbackParameters;
    export const Parameter = SetGetterCallbackParameter;

    export type Argument1<
        This extends object,
        Key extends keyof This
        > = SetGetterCallbackArgumentStatic<
        This,
        Key
        >;

    export type Argument2<
        This extends object,
        Key extends PropertyKey,
        Type
        > = SetGetterCallbackArgumentDynamic<
        This,
        Key,
        Type
        >;

    export type Type1<
        This extends object,
        Key extends keyof This
        > = SetGetterCallbackTypeStatic<
        This,
        Key
        >;

    export type Type2<
        This extends object,
        Key extends PropertyKey,
        Type
        > = SetGetterCallbackTypeDynamic<
        This,
        Key,
        Type
        >;
}
export default SetGetterCallback;
