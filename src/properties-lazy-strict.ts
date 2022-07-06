import {O} from 'ts-toolbelt';
import {Required} from 'utility-types';
import {PropertiesLazyDynamicParameters} from './properties-lazy-dynamic.js';

export type PropertiesLazyStaticReturnReadonly<
    This extends Record<PropertyKey, unknown>,
    Implement extends Partial<This>,
> = O.Readonly<Required<This, keyof Implement>>;

export type PropertiesLazyStaticReturnWritable<
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

export function PropertiesLazyStrictParameters<
    This extends Record<PropertyKey, any>,
    Implement extends Partial<This>,
>(
    object : This,
    factory : Partial<This>,
    writable ?: true,
    configurable ?: boolean
) : PropertiesLazyStaticReturnWritable<This, Implement>;

export function PropertiesLazyStrictParameters<
    This extends Record<PropertyKey, any>,
    Implement extends Partial<This>,
>(
    object : This,
    factory : Partial<This>,
    writable : false,
    configurable ?: boolean
) : PropertiesLazyStaticReturnReadonly<This, Implement>;

export function PropertiesLazyStrictParameters<
    This extends Record<PropertyKey, any>,
    Implement extends Partial<This>,
>(
    object : This,
    factory : Partial<This>,
    writable : boolean = true,
    configurable : boolean = true
) : PropertiesLazyStaticReturnWritable<This, Implement> {

    return PropertiesLazyDynamicParameters(object, factory, writable as true, configurable) as PropertiesLazyStaticReturnWritable<This, Implement>;
}

export type PropertiesLazyStaticArgumentWritable<
    This extends Record<PropertyKey, any>,
    Implement extends Partial<This>,
> = {
    object : This,
    factory : Partial<This>,
    writable ?: true,
    configurable ?: boolean
};

export type PropertiesLazyStaticArgumentReadonly<
    This extends Record<PropertyKey, any>,
    Implement extends Partial<This>,
> = {
    object : This,
    factory : Partial<This>,
    writable ?: boolean,
    configurable ?: boolean
};

export function PropertiesLazyStrictParameter<
    This extends Record<PropertyKey, any>,
    Implement extends Partial<This>,
    Type
>(  {
        object,
        factory,
        writable,
        configurable,
    } : PropertiesLazyStaticArgumentWritable<This, Implement>
) : PropertiesLazyStaticReturnWritable<This, Implement>;

export function PropertiesLazyStrictParameter<
    This extends Record<PropertyKey, any>,
    Implement extends Partial<This>,
    Type
>(  {
        object,
        factory,
        writable,
        configurable,
    } : PropertiesLazyStaticArgumentReadonly<This, Implement>
) : PropertiesLazyStaticReturnReadonly<This, Implement>;

export function PropertiesLazyStrictParameter<
    This extends Record<PropertyKey, any>,
    Implement extends Partial<This>,
    Type
>(  {
        object,
        factory,
        writable,
        configurable,
    } : PropertiesLazyStaticArgumentWritable<This, Implement>
) : PropertiesLazyStaticReturnWritable<This, Implement> {

    return PropertiesLazyStrictParameters<This, Implement>(object, factory, writable, configurable);
}


namespace PropertiesLazyStrict {
    export const Parameters = PropertiesLazyStrictParameters;
    export const Parameter = PropertiesLazyStrictParameter;
    export type ReturnReadonly<
        This extends Record<PropertyKey, unknown>,
        Implement extends Partial<This>,
    > = PropertiesLazyStaticReturnReadonly<This, Implement>;
    export type ReturnWritable<
        This extends Record<PropertyKey, unknown>,
        Implement extends Partial<This>,
    > = PropertiesLazyStaticReturnWritable<This, Implement>;
    export type ArgumentWritable<
        This extends Record<PropertyKey, any>,
        Implement extends Partial<This>,
    > = PropertiesLazyStaticArgumentWritable<This, Implement>;
    export type ArgumentReadonly<
        This extends Record<PropertyKey, any>,
        Implement extends Partial<This>,
    > = PropertiesLazyStaticArgumentReadonly<This, Implement>;
}
export default PropertiesLazyStrict;
