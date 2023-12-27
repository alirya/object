import {O} from 'ts-toolbelt';
import {Required} from 'utility-types';
import {PropertyLazyDynamicParameters} from './property-lazy-dynamic.js';
import Callable from '@axiona/function/callable.js';

export type PropertyLazyStaticReadonlyReturn<
    This extends object,
    Key extends keyof This
> = O.Readonly<Required<This, Key>>;

export type PropertyLazyStaticWritableReturn<
    This extends object,
    Key extends keyof This
> = Required<This, Key>;

/**
 * set property from {@param factory} to getter for {@param object}
 * should be used outside
 *
 * @param object
 *
 * @param property
 * getter key
 *
 * @param writable
 *
 * @param factory
 * @param configurable
 */

export function PropertyLazyStaticParameters<
    This extends object,
    Key extends keyof This
>(
    object : This,
    property : Key,
    factory : Callable<[This], This[Key]>,
    writable ?: true,
    configurable ?: boolean
) : PropertyLazyStaticWritableReturn<This, Key>;

export function PropertyLazyStaticParameters<
    This extends object,
    Key extends keyof This
>(
    object : This,
    property : Key,
    factory : Callable<[This], This[Key]>,
    writable : false,
    configurable ?: boolean
) : PropertyLazyStaticReadonlyReturn<This, Key>;

export function PropertyLazyStaticParameters<
    This extends object,
    Key extends keyof This
>(
    object : This,
    property : Key,
    factory : Callable<[This], This[Key]>,
    writable  = true,
    configurable  = true
) : PropertyLazyStaticWritableReturn<This, Key> {

    return PropertyLazyDynamicParameters(object, property, factory, writable as true, configurable) as PropertyLazyStaticWritableReturn<This, Key>;
}


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

export function PropertyLazyStaticParameter<
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
) : PropertyLazyStaticWritableReturn<This, Key>;

export function PropertyLazyStaticParameter<
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
) : PropertyLazyStaticReadonlyReturn<This, Key>;

export function PropertyLazyStaticParameter<
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
) : PropertyLazyStaticWritableReturn<This, Key> {

    return PropertyLazyStaticParameters<This, Key>(object, property, factory, writable, configurable);
}


namespace PropertyLazyStatic {
    export const Parameters = PropertyLazyStaticParameters;
    export const Parameter = PropertyLazyStaticParameter;
}
export default PropertyLazyStatic;
