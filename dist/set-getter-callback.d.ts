import { O } from "ts-toolbelt";
import { Required } from "utility-types";
export default SetGetterCallback;
declare namespace SetGetterCallback {
    const Parameter: typeof SetGetterCallbackParameter;
    const Object: typeof SetGetterCallbackObject;
    type Argument1<This extends object, Key extends keyof This> = SetGetterCallbackArgument1<This, Key>;
    type Argument2<This extends object, Key extends PropertyKey, Type> = SetGetterCallbackArgument2<This, Key, Type>;
    type Type1<This extends object, Key extends keyof This> = SetGetterCallbackType1<This, Key>;
    type Type2<This extends object, Key extends PropertyKey, Type> = SetGetterCallbackType2<This, Key, Type>;
}
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
export declare function SetGetterCallbackParameter<This extends object, Key extends keyof This>(object: This, property: Key, factory: () => This[Key], configurable?: boolean): O.Readonly<Required<This, Key>>;
export declare function SetGetterCallbackParameter<This extends object, Key extends PropertyKey, Type>(object: This, property: Key, factory: () => Type, configurable?: boolean): Omit<This, Key> & O.Readonly<Record<Key, Type>>;
export declare type SetGetterCallbackArgument1<This extends object, Key extends keyof This> = {
    object: This;
    property: Key;
    factory: () => This[Key];
    configurable?: boolean;
};
export declare type SetGetterCallbackArgument2<This extends object, Key extends PropertyKey, Type> = {
    object: This;
    property: Key;
    factory: () => Type;
    configurable?: boolean;
};
export declare type SetGetterCallbackType1<This extends object, Key extends keyof This> = O.Readonly<Required<This, Key>>;
export declare type SetGetterCallbackType2<This extends object, Key extends PropertyKey, Type> = Omit<This, Key> & O.Readonly<Record<Key, Type>>;
export declare function SetGetterCallbackObject<This extends object, Key extends keyof This>({ object, property, factory, configurable, }: SetGetterCallbackArgument1<This, Key>): SetGetterCallbackType1<This, Key>;
export declare function SetGetterCallbackObject<This extends object, Key extends PropertyKey, Type>({ object, property, factory, configurable, }: SetGetterCallbackArgument2<This, Key, Type>): SetGetterCallbackType2<This, Key, Type>;
