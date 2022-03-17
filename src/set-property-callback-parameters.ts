import MemoizeGetter from './value/value/set-property-parameters';
import {O} from 'ts-toolbelt';
import {Required} from 'utility-types';

export type SetPropertyCallbackTypeStatic<
    This extends object,
    Key extends keyof This
    > = O.Readonly<Required<This, Key>>;

export type SetPropertyCallbackTypeDynamic<
    This extends object,
    Key extends PropertyKey,
    Type
    > = Omit<This, Key> & O.Readonly<Record<Key, Type>>;


/**
 * @deprecated
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
export default function SetPropertyCallbackParameters<
    This extends object,
    Key extends keyof This
>(
    object : This,
    property : Key,
    factory : ()=>This[Key],
    writable ?: boolean,
    configurable ?: boolean
) : SetPropertyCallbackTypeStatic<This, Key>;

export default function SetPropertyCallbackParameters<
    This extends object,
    Key extends PropertyKey,
    Type
>(
    object : This,
    property : Key,
    factory : ()=>Type,
    writable ?: boolean,
    configurable ?: boolean
) : SetPropertyCallbackTypeDynamic<This, Key, Type>;

export default function SetPropertyCallbackParameters<
    This extends object,
    Type
>(
    object : This,
    property : PropertyKey,
    factory : ()=>Type,
    writable : boolean = true,
    configurable : boolean = true
) {

    return Object.defineProperty(object, property, {
        configurable : true,
        get() {
            return MemoizeGetter(
                object,
                <keyof This> property,
                factory(),
                writable,
                configurable
            );
        }
    });
}



