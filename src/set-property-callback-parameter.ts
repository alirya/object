import SetPropertyCallbackParameters, {
    SetPropertyCallbackParametersReturn as SetPropertyCallbackParameterReturn
} from "./set-property-callback-parameters";

export {SetPropertyCallbackParameterReturn}

export type SetPropertyCallbackParameterArgument<
    This extends object,
    Key extends keyof This
> = {
    object : This,
    property : Key,
    factory : ()=>This[Key],
    writable ?: boolean,
    configurable ?: boolean
}

export default function SetPropertyCallbackParameter<
    This extends object,
    Key extends keyof This
>(  {
        object,
        property,
        factory,
        writable,
        configurable,
    } : SetPropertyCallbackParameterArgument<This, Key>
) : SetPropertyCallbackParameterReturn<This, Key> {

    return SetPropertyCallbackParameters(object, property, factory, writable, configurable)
}
