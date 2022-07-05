import PropertiesLazyDynamicParameters, {
    PropertiesLazyDynamicParametersWritableReturn as PropertiesLazyDynamicParameterWritableReturn,
    PropertiesLazyDynamicParametersReadonlyReturn as PropertiesLazyDynamicParameterReadonlyReturn,
} from './properties-lazy-dynamic-parameters';
import Callable from '@alirya/function/callable';

export {PropertiesLazyDynamicParameterWritableReturn, PropertiesLazyDynamicParameterReadonlyReturn};

export type PropertyLazyDynamicParameterWritableArgument<
    This extends Record<PropertyKey, any>,
    Factory extends Record<PropertyKey, any>
> = {
    object : This,
    factory : Factory,
    writable ?: true,
    configurable ?: boolean
};

export type PropertyLazyDynamicParameterReadonlyArgument<
    This extends Record<PropertyKey, any>,
    Factory extends Record<PropertyKey, any>
> = {
    object : This,
    factory : Factory,
    writable ?: boolean,
    configurable ?: boolean
};

export default function PropertiesLazyDynamicParameter<
    This extends Record<PropertyKey, any>,
    Factory extends Record<PropertyKey, any>
>(  {
        object,
        factory,
        writable,
        configurable,
    } : PropertyLazyDynamicParameterWritableArgument<This, Factory>
) : PropertiesLazyDynamicParameterWritableReturn<This, Factory>;

export default function PropertiesLazyDynamicParameter<
    This extends Record<PropertyKey, any>,
    Factory extends Record<PropertyKey, any>
>(  {
        object,
        factory,
        writable,
        configurable,
    } : PropertyLazyDynamicParameterReadonlyArgument<This, Factory>
) : PropertiesLazyDynamicParameterReadonlyReturn<This, Factory>;

export default function PropertiesLazyDynamicParameter<
    This extends Record<PropertyKey, any>,
    Factory extends Record<PropertyKey, any>
>(  {
        object,
        factory,
        writable,
        configurable,
    } : PropertyLazyDynamicParameterWritableArgument<This, Factory>
) : PropertiesLazyDynamicParameterWritableReturn<This, Factory> {

    return PropertiesLazyDynamicParameters<This, Factory>(object, factory, writable, configurable);
}
