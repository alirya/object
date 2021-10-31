import {O} from "ts-toolbelt";
import {Required} from "utility-types";
import SetPropertyCallback from "./set-property-callback";


export default SetGetterCallback;
namespace SetGetterCallback {

    export const Parameter = SetGetterCallbackParameter;
    export const Object = SetGetterCallbackObject;

    export type Argument1<
        This extends object,
        Key extends keyof This
        > = SetGetterCallbackArgument1<
        This,
        Key
        >;

    export type Argument2<
        This extends object,
        Key extends PropertyKey,
        Type
        > = SetGetterCallbackArgument2<
        This,
        Key,
        Type
        >;

    export type Type1<
        This extends object,
        Key extends keyof This
        > = SetGetterCallbackType1<
        This,
        Key
        >;

    export type Type2<
        This extends object,
        Key extends PropertyKey,
        Type
        > = SetGetterCallbackType2<
        This,
        Key,
        Type
        >;
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
export function SetGetterCallbackParameter<
    This extends object,
    Key extends keyof This
>(
    object : This,
    property : Key,
    factory : ()=>This[Key],
    configurable ?: boolean
) : O.Readonly<Required<This, Key>>

export function SetGetterCallbackParameter<
    This extends object,
    Key extends PropertyKey,
    Type
>(
    object : This,
    property : Key,
    factory : ()=>Type,
    configurable ?: boolean
) : Omit<This, Key> & O.Readonly<Record<Key, Type>>

export function SetGetterCallbackParameter<
    This extends object,
    Type
>(
    object : This,
    property : PropertyKey,
    factory : ()=>Type,
    configurable : boolean = true,
) {

    return SetPropertyCallback.Parameter(object, property, factory, false, configurable);
}





export type SetGetterCallbackArgument1<
    This extends object,
    Key extends keyof This
    > = {
    object : This,
    property : Key,
    factory : ()=>This[Key],
    configurable ?: boolean
}

export type SetGetterCallbackArgument2<
    This extends object,
    Key extends PropertyKey,
    Type
    > = {
    object : This,
    property : Key,
    factory : ()=>Type,
    configurable ?: boolean
}



export type SetGetterCallbackType1<
    This extends object,
    Key extends keyof This
    > = O.Readonly<Required<This, Key>>

export type SetGetterCallbackType2<
    This extends object,
    Key extends PropertyKey,
    Type
    > = Omit<This, Key> & O.Readonly<Record<Key, Type>>



export function SetGetterCallbackObject<
    This extends object,
    Key extends keyof This
    >(
    //object : This,
    //property : Key,
    //factory : ()=>This[Key],
    //writable ?: boolean,
    //configurable ?: boolean,
    {
        object,
        property,
        factory,
        configurable,
    } : SetGetterCallbackArgument1<This, Key>
) : SetGetterCallbackType1<This, Key>

export function SetGetterCallbackObject<
    This extends object,
    Key extends PropertyKey,
    Type
    >(
    // object : This,
    // property : Key,
    // factory : ()=>Type,
    // writable ?: boolean,
    // configurable ?: boolean,
    {
        object,
        property,
        factory,
        configurable,
    } : SetGetterCallbackArgument2<This, Key, Type>
) : SetGetterCallbackType2<This, Key, Type>

export function SetGetterCallbackObject<
    This extends object,
    Key extends keyof This
    >(
    {
        object,
        property,
        factory,
        configurable,
    } : SetGetterCallbackArgument1<This, Key>
) {

    return SetGetterCallbackParameter(object, property, factory, configurable)
}
