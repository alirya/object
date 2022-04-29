import {O} from 'ts-toolbelt';
import {Required} from 'utility-types';
import PropertyLazyDynamicParameters from './property-lazy-dynamic-parameters';
import Callable from '@alirya/function/callable';

export type PropertyLazyStaticParametersReadonlyReturn<
    This extends object,
    Key extends keyof This
> = O.Readonly<Required<This, Key>>;

export type PropertyLazyStaticParametersWritableReturn<
    This extends object,
    Key extends keyof This
> = Required<This, Key>;

/**
 * strict version of {@see PropertyLazyDynamicParameters}
 *
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

export default function PropertyLazyStrictParameters<
    This extends object,
    Key extends keyof This
>(
    object : This,
    property : Key,
    factory : Callable<[This], This[Key]>,
    writable ?: true,
    configurable ?: boolean
) : PropertyLazyStaticParametersWritableReturn<This, Key>;

export default function PropertyLazyStrictParameters<
    This extends object,
    Key extends keyof This
>(
    object : This,
    property : Key,
    factory : Callable<[This], This[Key]>,
    writable : false,
    configurable ?: boolean
) : PropertyLazyStaticParametersReadonlyReturn<This, Key>;

export default function PropertyLazyStrictParameters<
    This extends object,
    Key extends keyof This
>(
    object : This,
    property : Key,
    factory : Callable<[This], This[Key]>,
    writable : boolean = true,
    configurable : boolean = true
) : PropertyLazyStaticParametersWritableReturn<This, Key> {

    return PropertyLazyDynamicParameters(object, property, factory, writable as true, configurable) as PropertyLazyStaticParametersWritableReturn<This, Key>;
}
