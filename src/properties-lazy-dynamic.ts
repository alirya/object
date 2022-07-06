import {O} from 'ts-toolbelt';
import {PropertyLazyDynamicParameters} from './property-lazy-dynamic.js';

export type PropertiesLazyDynamicReturnWritable<
    This extends Record<PropertyKey, any>,
    Factory extends Record<PropertyKey, any>,
> = Omit<This, keyof Factory> & Factory;

export type PropertiesLazyDynamicReturnReadonly<
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
export function PropertiesLazyDynamicParameters<
    This extends Record<PropertyKey, any>,
    Factory extends Record<PropertyKey, any>
>(
    object : This,
    factory : Factory,
    writable : false,
    configurable ?: boolean
) : PropertiesLazyDynamicReturnReadonly<This, Factory>;

/**
 * Strict key and infer type
 */
export function PropertiesLazyDynamicParameters<
    This extends Record<PropertyKey, any>,
    Factory extends Record<PropertyKey, any>
>(
    object : This,
    factory : Factory,
    writable ?: true,
    configurable ?: boolean
) : PropertiesLazyDynamicReturnWritable<This, Factory>;

/**
 * Strict key and infer type
 */
export function PropertiesLazyDynamicParameters<
    This extends Record<PropertyKey, any>,
    Factory extends Record<PropertyKey, any>
>(
    object : This,
    factory : Factory,
    writable : boolean = true,
    configurable : boolean = true
) : PropertiesLazyDynamicReturnWritable<This, Factory> {

    for (const key of Object.keys(factory)) {

        PropertyLazyDynamicParameters(object, key, ()=>factory[key], writable as false, configurable);
    }

    return object as PropertiesLazyDynamicReturnWritable<This, Factory>;
}


export type PropertiesLazyDynamicArgumentWritable<
    This extends Record<PropertyKey, any>,
    Factory extends Record<PropertyKey, any>
> = {
    object : This,
    factory : Factory,
    writable ?: true,
    configurable ?: boolean
};

export type PropertiesLazyDynamicArgumentReadonly<
    This extends Record<PropertyKey, any>,
    Factory extends Record<PropertyKey, any>
> = {
    object : This,
    factory : Factory,
    writable ?: boolean,
    configurable ?: boolean
};

export function PropertiesLazyDynamicParameter<
    This extends Record<PropertyKey, any>,
    Factory extends Record<PropertyKey, any>
>(  {
        object,
        factory,
        writable,
        configurable,
    } : PropertiesLazyDynamicArgumentWritable<This, Factory>
) : PropertiesLazyDynamicReturnWritable<This, Factory>;

export function PropertiesLazyDynamicParameter<
    This extends Record<PropertyKey, any>,
    Factory extends Record<PropertyKey, any>
>(  {
        object,
        factory,
        writable,
        configurable,
    } : PropertiesLazyDynamicArgumentReadonly<This, Factory>
) : PropertiesLazyDynamicReturnReadonly<This, Factory>;

export function PropertiesLazyDynamicParameter<
    This extends Record<PropertyKey, any>,
    Factory extends Record<PropertyKey, any>
>(  {
        object,
        factory,
        writable,
        configurable,
    } : PropertiesLazyDynamicArgumentWritable<This, Factory>
) : PropertiesLazyDynamicReturnWritable<This, Factory> {

    return PropertiesLazyDynamicParameters<This, Factory>(object, factory, writable, configurable);
}


namespace PropertiesLazyDynamic {
    export const Parameters = PropertiesLazyDynamicParameters;
    export const Parameter = PropertiesLazyDynamicParameter;
    export type ReturnWritable<
        This extends Record<PropertyKey, any>,
        Factory extends Record<PropertyKey, any>,
    > = PropertiesLazyDynamicReturnWritable<This, Factory>;
    export type ReturnReadonly<
        This extends Record<PropertyKey, any>,
        Factory extends Record<PropertyKey, any>,
    > = PropertiesLazyDynamicReturnReadonly<This, Factory>;
    export type ArgumentWritable<
        This extends Record<PropertyKey, any>,
        Factory extends Record<PropertyKey, any>
    > = PropertiesLazyDynamicArgumentWritable<This, Factory>;
    export type ArgumentReadonly<
        This extends Record<PropertyKey, any>,
        Factory extends Record<PropertyKey, any>
    > = PropertiesLazyDynamicArgumentReadonly<This, Factory>;
}
export default PropertiesLazyDynamic;
