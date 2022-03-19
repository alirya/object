import PropertyLazyDynamicParameters, {
    PropertyLazyDynamicParametersWritableReturn as PropertyLazyDynamicParameterWritableReturn,
    PropertyLazyDynamicParametersReadonlyReturn as PropertyLazyDynamicParameterReadonlyReturn,
} from './property-lazy-dynamic-parameters';
import Callable from '@alirya/function/callable';

export {PropertyLazyDynamicParameterWritableReturn, PropertyLazyDynamicParameterReadonlyReturn};

export type PropertyLazyDynamicParameterWritableArgument<
    This extends object,
    Key extends PropertyKey,
    Type
> = {
    object : This,
    property : Key,
    factory : Callable<[This], Type>,
    writable ?: true,
    configurable ?: boolean
};

export type PropertyLazyDynamicParameterReadonlyArgument<
    This extends object,
    Key extends PropertyKey,
    Type
> = {
    object : This,
    property : Key,
    factory : Callable<[This], Type>,
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
    } : PropertyLazyDynamicParameterWritableArgument<This, Key, Type>
) : PropertyLazyDynamicParameterWritableReturn<This, Key, Type>;

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
    } : PropertyLazyDynamicParameterReadonlyArgument<This, Key, Type>
) : PropertyLazyDynamicParameterReadonlyReturn<This, Key, Type>;

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
    } : PropertyLazyDynamicParameterWritableArgument<This, Key, Type>
) : PropertyLazyDynamicParameterWritableReturn<This, Key, Type> {

    return PropertyLazyDynamicParameters<This, Key, Type>(object, property, factory, writable, configurable);
}
