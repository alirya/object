import MemoizeGetter from './value/value/set-property.js';
import {O} from 'ts-toolbelt';
import Callable from '@alirya/function/callable.js';

export type PropertyLazyDynamicWritableReturn<
    This extends object,
    Key extends PropertyKey,
    Type
> = Omit<This, Key> & Record<Key, Type>;

export type PropertyLazyDynamicReadonlyReturn<
    This extends object,
    Key extends PropertyKey,
    Type
> = Omit<This, Key> & O.Readonly<Record<Key, Type>>;

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

/**
 * Strict key and infer type
 */
export function PropertyLazyDynamicParameters<
    This extends object,
    Key extends PropertyKey,
    Type
>(
    object : This,
    property : Key,
    factory : Callable<[This], Type>,
    writable : false,
    configurable ?: boolean
) : PropertyLazyDynamicReadonlyReturn<This, Key, Type>;

/**
 * Strict key and infer type
 */
export function PropertyLazyDynamicParameters<
    This extends object,
    Key extends PropertyKey,
    Type
>(
    object : This,
    property : Key,
    factory : Callable<[This], Type>,
    writable ?: true,
    configurable ?: boolean
) : PropertyLazyDynamicWritableReturn<This, Key, Type>;

/**
 * Strict key and infer type
 */
export function PropertyLazyDynamicParameters<
    This extends object,
    Key extends PropertyKey,
    Type
>(
    object : This,
    property : Key,
    factory : Callable<[This], Type>,
    writable : boolean = true,
    configurable : boolean = true
) : PropertyLazyDynamicWritableReturn<This, Key, Type> {

    return Object.defineProperty(object, property, {
        configurable : true,
        get() {
            return MemoizeGetter.Parameters(
                object,
                property as (keyof This)|PropertyKey as keyof This,
                factory(object),
                writable,
                configurable
            );
        }
    }) as PropertyLazyDynamicWritableReturn<This, Key, Type>;
}





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

export function PropertyLazyDynamicParameter<
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
) : PropertyLazyDynamicWritableReturn<This, Key, Type>;

export function PropertyLazyDynamicParameter<
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
) : PropertyLazyDynamicReadonlyReturn<This, Key, Type>;

export function PropertyLazyDynamicParameter<
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
) : PropertyLazyDynamicWritableReturn<This, Key, Type> {

    return PropertyLazyDynamicParameters<This, Key, Type>(object, property, factory, writable, configurable);
}


namespace PropertyLazyDynamic {
    export const Parameters = PropertyLazyDynamicParameters;
    export const Parameter = PropertyLazyDynamicParameter;
}
export default PropertyLazyDynamic;
