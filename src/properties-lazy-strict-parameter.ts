import PropertiesLazyStrictParameters, {
    PropertiesLazyStaticParametersWritableReturn as PropertiesLazyStaticParameterWritableReturn,
    PropertiesLazyStaticParametersReadonlyReturn as PropertiesLazyStaticParameterReadonlyReturn,
} from './properties-lazy-strict-parameters';
import Callable from '@alirya/function/callable';

export {PropertiesLazyStaticParameterWritableReturn, PropertiesLazyStaticParameterReadonlyReturn};

export type PropertiesLazyStaticParameterWritableArgument<
    This extends Record<PropertyKey, any>,
    Implement extends Partial<This>,
> = {
    object : This,
    factory : Partial<This>,
    writable ?: true,
    configurable ?: boolean
};

export type PropertiesLazyStaticParameterReadonlyArgument<
    This extends Record<PropertyKey, any>,
    Implement extends Partial<This>,
> = {
    object : This,
    factory : Partial<This>,
    writable ?: boolean,
    configurable ?: boolean
};

export default function PropertiesLazyStrictParameter<
    This extends Record<PropertyKey, any>,
    Implement extends Partial<This>,
    Type
>(  {
        object,
        factory,
        writable,
        configurable,
    } : PropertiesLazyStaticParameterWritableArgument<This, Implement>
) : PropertiesLazyStaticParameterWritableReturn<This, Implement>;

export default function PropertiesLazyStrictParameter<
    This extends Record<PropertyKey, any>,
    Implement extends Partial<This>,
    Type
>(  {
        object,
        factory,
        writable,
        configurable,
    } : PropertiesLazyStaticParameterReadonlyArgument<This, Implement>
) : PropertiesLazyStaticParameterReadonlyReturn<This, Implement>;

export default function PropertiesLazyStrictParameter<
    This extends Record<PropertyKey, any>,
    Implement extends Partial<This>,
    Type
>(  {
        object,
        factory,
        writable,
        configurable,
    } : PropertiesLazyStaticParameterWritableArgument<This, Implement>
) : PropertiesLazyStaticParameterWritableReturn<This, Implement> {

    return PropertiesLazyStrictParameters<This, Implement>(object, factory, writable, configurable);
}
