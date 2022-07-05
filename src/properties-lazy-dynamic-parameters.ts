import MemoizeGetter from './value/value/set-property-parameters';
import {O} from 'ts-toolbelt';
import Callable from '@alirya/function/callable';
import PropertyLazyDynamicParameters from './property-lazy-dynamic-parameters';

export type PropertiesLazyDynamicParametersWritableReturn<
    This extends Record<PropertyKey, any>,
    Factory extends Record<PropertyKey, any>,
> = Omit<This, keyof Factory> & Factory;

export type PropertiesLazyDynamicParametersReadonlyReturn<
    This extends Record<PropertyKey, any>,
    Factory extends Record<PropertyKey, any>,
> = Omit<This, keyof Factory> & O.Readonly<Factory>;

/**
 * dynamic version of {@see PropertyLazyStaticParameters}
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

/**
 * Strict key and infer type
 */
export default function PropertiesLazyDynamicParameters<
    This extends Record<PropertyKey, any>,
    Factory extends Record<PropertyKey, any>
>(
    object : This,
    factory : Factory,
    writable : false,
    configurable ?: boolean
) : PropertiesLazyDynamicParametersReadonlyReturn<This, Factory>;

/**
 * Strict key and infer type
 */
export default function PropertiesLazyDynamicParameters<
    This extends Record<PropertyKey, any>,
    Factory extends Record<PropertyKey, any>
>(
    object : This,
    factory : Factory,
    writable ?: true,
    configurable ?: boolean
) : PropertiesLazyDynamicParametersWritableReturn<This, Factory>;

/**
 * Strict key and infer type
 */
export default function PropertiesLazyDynamicParameters<
    This extends Record<PropertyKey, any>,
    Factory extends Record<PropertyKey, any>
>(
    object : This,
    factory : Factory,
    writable : boolean = true,
    configurable : boolean = true
) : PropertiesLazyDynamicParametersWritableReturn<This, Factory> {

    for (const key of Object.keys(factory)) {

        PropertyLazyDynamicParameters(object, key, ()=>factory[key], writable as false, configurable);
    }

    return object as PropertiesLazyDynamicParametersWritableReturn<This, Factory>;
}



