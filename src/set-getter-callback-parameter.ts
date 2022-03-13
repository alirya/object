import SetGetterCallbackParameters, {SetGetterCallbackParametersReturn as SetGetterCallbackParameterReturn} from "./set-getter-callback-parameters";

/**
 * set return from {@param factory} to getter for {@param object}
 * should be used outside
 *
 * @param object
 *
 * @param property
 * getter key
 *
 * @param factory
 * @param configurable
 */

export type SetGetterCallbackParameterArgument<
    This extends object,
    Key extends keyof This
> = {
    object : This,
    property : Key,
    factory : ()=>This[Key],
    configurable ?: boolean
    writable ?: boolean
}


export default function SetGetterCallbackParameter<
    This extends object,
    Key extends keyof This
>(  {
        object,
        property,
        factory,
        configurable,
        writable,
    } : SetGetterCallbackParameterArgument<This, Key>
) : SetGetterCallbackParameterReturn<This, Key> {

    return SetGetterCallbackParameters(object, property, factory, configurable, writable)
}
