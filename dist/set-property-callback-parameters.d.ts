import { O } from "ts-toolbelt";
import { Required } from "utility-types";
export declare type SetPropertyCallbackTypeStatic<This extends object, Key extends keyof This> = O.Readonly<Required<This, Key>>;
export declare type SetPropertyCallbackTypeDynamic<This extends object, Key extends PropertyKey, Type> = Omit<This, Key> & O.Readonly<Record<Key, Type>>;
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
export default function SetPropertyCallbackParameters<This extends object, Key extends keyof This>(object: This, property: Key, factory: () => This[Key], writable?: boolean, configurable?: boolean): SetPropertyCallbackTypeStatic<This, Key>;
export default function SetPropertyCallbackParameters<This extends object, Key extends PropertyKey, Type>(object: This, property: Key, factory: () => Type, writable?: boolean, configurable?: boolean): SetPropertyCallbackTypeDynamic<This, Key, Type>;
