import { O } from "ts-toolbelt";
import { Required } from "utility-types";
export default SetPropertyCallback;
declare namespace SetPropertyCallback {
    const Parameter: typeof SetPropertyCallbackParameter;
    const Object: typeof SetPropertyCallbackObject;
    type Argument1<This extends object, Key extends keyof This> = SetPropertyCallbackArgument1<This, Key>;
    type Argument2<This extends object, Key extends PropertyKey, Type> = SetPropertyCallbackArgument2<This, Key, Type>;
    type Type1<This extends object, Key extends keyof This> = SetPropertyCallbackType1<This, Key>;
    type Type2<This extends object, Key extends PropertyKey, Type> = SetPropertyCallbackType2<This, Key, Type>;
}
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
export declare function SetPropertyCallbackParameter<This extends object, Key extends keyof This>(object: This, property: Key, factory: () => This[Key], writable?: boolean, configurable?: boolean): SetPropertyCallbackType1<This, Key>;
export declare function SetPropertyCallbackParameter<This extends object, Key extends PropertyKey, Type>(object: This, property: Key, factory: () => Type, writable?: boolean, configurable?: boolean): SetPropertyCallbackType2<This, Key, Type>;
export declare type SetPropertyCallbackArgument1<This extends object, Key extends keyof This> = {
    object: This;
    property: Key;
    factory: () => This[Key];
    writable?: boolean;
    configurable?: boolean;
};
export declare type SetPropertyCallbackArgument2<This extends object, Key extends PropertyKey, Type> = {
    object: This;
    property: Key;
    factory: () => Type;
    writable?: boolean;
    configurable?: boolean;
};
export declare type SetPropertyCallbackType1<This extends object, Key extends keyof This> = O.Readonly<Required<This, Key>>;
export declare type SetPropertyCallbackType2<This extends object, Key extends PropertyKey, Type> = Omit<This, Key> & O.Readonly<Record<Key, Type>>;
export declare function SetPropertyCallbackObject<This extends object, Key extends keyof This>({ object, property, factory, writable, configurable, }: SetPropertyCallbackArgument1<This, Key>): SetPropertyCallbackType1<This, Key>;
export declare function SetPropertyCallbackObject<This extends object, Key extends PropertyKey, Type>({ object, property, factory, writable, configurable, }: SetPropertyCallbackArgument2<This, Key, Type>): SetPropertyCallbackType2<This, Key, Type>;
