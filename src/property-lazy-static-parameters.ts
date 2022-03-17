import {O} from 'ts-toolbelt';
import {Required} from 'utility-types';
import PropertyLazyDynamicParameters from './property-lazy-dynamic-parameters';

export type PropertyLazyStaticParametersReadonlyReturn<
    This extends object,
    Key extends keyof This
> = O.Readonly<Required<This, Key>>;

export type PropertyLazyStaticParametersWritableReturn<
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

export default function PropertyLazyStaticParameters<
    This extends object,
    Key extends keyof This
>(
    object : This,
    property : Key,
    factory : ()=>This[Key],
    writable ?: true,
    configurable ?: boolean
) : PropertyLazyStaticParametersWritableReturn<This, Key>;

export default function PropertyLazyStaticParameters<
    This extends object,
    Key extends keyof This
>(
    object : This,
    property : Key,
    factory : ()=>This[Key],
    writable : false,
    configurable ?: boolean
) : PropertyLazyStaticParametersReadonlyReturn<This, Key>;

export default function PropertyLazyStaticParameters<
    This extends object,
    Key extends keyof This
>(
    object : This,
    property : Key,
    factory : ()=>This[Key],
    writable : boolean = true,
    configurable : boolean = true
) : PropertyLazyStaticParametersWritableReturn<This, Key> {

    return PropertyLazyDynamicParameters(object, property, factory, writable as true, configurable) as PropertyLazyStaticParametersWritableReturn<This, Key>;
}
