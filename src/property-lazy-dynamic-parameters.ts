import MemoizeGetter from './value/value/set-property-parameters';
import {O} from 'ts-toolbelt';

export type PropertyLazyDynamicParametersReturn<
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
export default function PropertyLazyDynamicParameters<
    This extends object,
    Key extends PropertyKey,
    Type
>(
    object : This,
    property : Key,
    factory : ()=>Type,
    writable : boolean = true,
    configurable : boolean = true
) : PropertyLazyDynamicParametersReturn<This, Key, Type> {

    return Object.defineProperty(object, property, {
        configurable : true,
        get() {
            return MemoizeGetter(
                object,
                property as (keyof This)|PropertyKey as keyof This,
                factory(),
                writable,
                configurable
            );
        }
    }) as PropertyLazyDynamicParametersReturn<This, Key, Type>;
}



