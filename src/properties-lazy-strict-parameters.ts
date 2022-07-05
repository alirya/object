import {O} from 'ts-toolbelt';
import {Required} from 'utility-types';
import PropertiesLazyDynamicParameters from './properties-lazy-dynamic-parameters';
import Callable from '@alirya/function/callable';

export type PropertiesLazyStaticParametersReadonlyReturn<
    This extends Record<PropertyKey, unknown>,
    Implement extends Partial<This>,
> = O.Readonly<Required<This, keyof Implement>>;

export type PropertiesLazyStaticParametersWritableReturn<
    This extends Record<PropertyKey, unknown>,
    Implement extends Partial<This>,
> = Required<This, keyof Implement>;

/**
 * strict version of {@see PropertiesLazyDynamicParameters}
 *
 * set properties from {@param factory} to getter for {@param object}
 * should be used outside
 *
 * @param object
 *
 * @param properties
 * getter key
 *
 * @param writable
 *
 * @param factory
 * @param configurable
 */

export default function PropertiesLazyStrictParameters<
    This extends Record<PropertyKey, any>,
    Implement extends Partial<This>,
>(
    object : This,
    factory : Partial<This>,
    writable ?: true,
    configurable ?: boolean
) : PropertiesLazyStaticParametersWritableReturn<This, Implement>;

export default function PropertiesLazyStrictParameters<
    This extends Record<PropertyKey, any>,
    Implement extends Partial<This>,
>(
    object : This,
    factory : Partial<This>,
    writable : false,
    configurable ?: boolean
) : PropertiesLazyStaticParametersReadonlyReturn<This, Implement>;

export default function PropertiesLazyStrictParameters<
    This extends Record<PropertyKey, any>,
    Implement extends Partial<This>,
>(
    object : This,
    factory : Partial<This>,
    writable : boolean = true,
    configurable : boolean = true
) : PropertiesLazyStaticParametersWritableReturn<This, Implement> {

    return PropertiesLazyDynamicParameters(object, factory, writable as true, configurable) as PropertiesLazyStaticParametersWritableReturn<This, Implement>;
}
