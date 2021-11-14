import SetGetterCallbackParameters, {SetGetterCallbackTypeDynamic, SetGetterCallbackTypeStatic} from "./set-getter-callback-parameters";

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



export type SetGetterCallbackArgumentStatic<
    This extends object,
    Key extends keyof This
    > = {
    object : This,
    property : Key,
    factory : ()=>This[Key],
    configurable ?: boolean
}

export type SetGetterCallbackArgumentDynamic<
    This extends object,
    Key extends PropertyKey,
    Type
    > = {
    object : This,
    property : Key,
    factory : ()=>Type,
    configurable ?: boolean
}







export default function SetGetterCallbackParameter<
    This extends object,
    Key extends keyof This
    >(
    //object : This,
    //property : Key,
    //factory : ()=>This[Key],
    //writable ?: boolean,
    //configurable ?: boolean,
    {
        object,
        property,
        factory,
        configurable,
    } : SetGetterCallbackArgumentStatic<This, Key>
) : SetGetterCallbackTypeStatic<This, Key>

export default function SetGetterCallbackParameter<
    This extends object,
    Key extends PropertyKey,
    Type
    >(
    // object : This,
    // property : Key,
    // factory : ()=>Type,
    // writable ?: boolean,
    // configurable ?: boolean,
    {
        object,
        property,
        factory,
        configurable,
    } : SetGetterCallbackArgumentDynamic<This, Key, Type>
) : SetGetterCallbackTypeDynamic<This, Key, Type>

export default function SetGetterCallbackParameter<
    This extends object,
    Key extends keyof This
    >(
    {
        object,
        property,
        factory,
        configurable,
    } : SetGetterCallbackArgumentStatic<This, Key>
) {

    return SetGetterCallbackParameters(object, property, factory, configurable)
}
