import PropertyLazyDynamicParameters , {PropertyLazyDynamicParametersReturn as PropertyLazyDynamicParameterReturn} from './property-lazy-dynamic-parameters';

export {PropertyLazyDynamicParameterReturn};
export type PropertyLazyDynamicParameterArgument<
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

export default function PropertyLazyDynamicParameter<
    This extends object,
    Key extends PropertyKey,
    Type
>(  {
        object,
        property,
        factory,
        writable,
        configurable,
    } : PropertyLazyDynamicParameterArgument<This, Key, Type>
) : PropertyLazyDynamicParameterReturn<This, Key, Type> {

    return PropertyLazyDynamicParameters<This, Key, Type>(object, property, factory, writable, configurable);
}
