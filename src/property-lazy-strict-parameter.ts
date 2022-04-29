import PropertyLazyStrictParameters, {
    PropertyLazyStaticParametersWritableReturn as PropertyLazyStaticParameterWritableReturn,
    PropertyLazyStaticParametersReadonlyReturn as PropertyLazyStaticParameterReadonlyReturn,
} from './property-lazy-strict-parameters';
import Callable from '@alirya/function/callable';

export {PropertyLazyStaticParameterWritableReturn, PropertyLazyStaticParameterReadonlyReturn};

export type PropertyLazyStaticParameterWritableArgument<
    This extends object,
    Key extends keyof This,
> = {
    object : This,
    property : Key,
    factory : Callable<[This], This[Key]>,
    writable ?: true,
    configurable ?: boolean
};

export type PropertyLazyStaticParameterReadonlyArgument<
    This extends object,
    Key extends keyof This,
> = {
    object : This,
    property : Key,
    factory : Callable<[This], This[Key]>,
    writable ?: boolean,
    configurable ?: boolean
};

export default function PropertyLazyStrictParameter<
    This extends object,
    Key extends keyof This,
    Type
>(  {
        object,
        property,
        factory,
        writable,
        configurable,
    } : PropertyLazyStaticParameterWritableArgument<This, Key>
) : PropertyLazyStaticParameterWritableReturn<This, Key>;

export default function PropertyLazyStrictParameter<
    This extends object,
    Key extends keyof This,
    Type
>(  {
        object,
        property,
        factory,
        writable,
        configurable,
    } : PropertyLazyStaticParameterReadonlyArgument<This, Key>
) : PropertyLazyStaticParameterReadonlyReturn<This, Key>;

export default function PropertyLazyStrictParameter<
    This extends object,
    Key extends keyof This,
    Type
    >(  {
            object,
            property,
            factory,
            writable,
            configurable,
        } : PropertyLazyStaticParameterWritableArgument<This, Key>
) : PropertyLazyStaticParameterWritableReturn<This, Key> {

    return PropertyLazyStrictParameters<This, Key>(object, property, factory, writable, configurable);
}
