import SetPropertyCallbackParameters, {SetPropertyCallbackTypeDynamic, SetPropertyCallbackTypeStatic} from './set-property-callback-parameters';


export type SetPropertyCallbackArgumentStatic<
    This extends object,
    Key extends keyof This
> = {
    object : This,
    property : Key,
    factory : ()=>This[Key],
    writable ?: boolean,
    configurable ?: boolean
};

export type SetPropertyCallbackArgumentDynamic<
    This extends object,
    Key extends PropertyKey,
    Type
> = {
    object : This,
    property : Key,
    factory : ()=>Type,
    writable ?: boolean,
    configurable ?: boolean
};

/**
 * @deprecated
 */
export default function SetPropertyCallbackParameter<
    This extends object,
    Key extends keyof This
    >(
    {
        object,
        property,
        factory,
        writable,
        configurable,
    } : SetPropertyCallbackArgumentStatic<This, Key>
) : SetPropertyCallbackTypeStatic<This, Key>;

export default function SetPropertyCallbackParameter<
    This extends object,
    Key extends PropertyKey,
    Type
    >(
    {
        object,
        property,
        factory,
        writable,
        configurable,
    } : SetPropertyCallbackArgumentDynamic<This, Key, Type>
) : SetPropertyCallbackTypeDynamic<This, Key, Type>;

export default function SetPropertyCallbackParameter<
    This extends object,
    Key extends keyof This
    >(
    {
        object,
        property,
        factory,
        writable,
        configurable,
    } : SetPropertyCallbackArgumentStatic<This, Key>
) {

    return SetPropertyCallbackParameters(object, property, factory, writable, configurable);
}
