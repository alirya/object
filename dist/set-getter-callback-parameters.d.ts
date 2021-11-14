import { O } from "ts-toolbelt";
import { Required } from "utility-types";
export declare type SetGetterCallbackTypeStatic<This extends object, Key extends keyof This> = O.Readonly<Required<This, Key>>;
export declare type SetGetterCallbackTypeDynamic<This extends object, Key extends PropertyKey, Type> = Omit<This, Key> & O.Readonly<Record<Key, Type>>;
/**
 * set return from {@param factory} to getter for {@param object}
 * should be used outside
 *
 * @param object
 *
 * @param property
 * getter key
 *
 * @param factory
 * @param configurable
 */
export default function SetGetterCallbackParameters<This extends object, Key extends keyof This>(object: This, property: Key, factory: () => This[Key], configurable?: boolean): SetGetterCallbackTypeStatic<This, Key>;
export default function SetGetterCallbackParameters<This extends object, Key extends PropertyKey, Type>(object: This, property: Key, factory: () => Type, configurable?: boolean): SetGetterCallbackTypeDynamic<This, Key, Type>;
