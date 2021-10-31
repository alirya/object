import MemoizeGetter from "./value/value/set-property";
import {O} from "ts-toolbelt";
import {Required} from "utility-types";
import Validator from "@dikac/t-validator/validator";
import Instance from "@dikac/t-validator/validatable/validatable";
import Validatable from "@dikac/t-validatable/validatable";

export default SetPropertyCallback;
namespace SetPropertyCallback {

    export const Parameter = SetPropertyCallbackParameter;
    export const Object = SetPropertyCallbackObject;

    export type Argument1<
        This extends object,
        Key extends keyof This
        > = SetPropertyCallbackArgument1<
        This,
        Key
        >;

    export type Argument2<
        This extends object,
        Key extends PropertyKey,
        Type
        > = SetPropertyCallbackArgument2<
        This,
        Key,
        Type
        >;

    export type Type1<
        This extends object,
        Key extends keyof This
        > = SetPropertyCallbackType1<
        This,
        Key
        >;

    export type Type2<
        This extends object,
        Key extends PropertyKey,
        Type
        > = SetPropertyCallbackType2<
        This,
        Key,
        Type
        >;
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
export function SetPropertyCallbackParameter<
    This extends object,
    Key extends keyof This
    >(
    object : This,
    property : Key,
    factory : ()=>This[Key],
    writable ?: boolean,
    configurable ?: boolean
) : SetPropertyCallbackType1<This, Key>

export function SetPropertyCallbackParameter<
    This extends object,
    Key extends PropertyKey,
    Type
    >(
    object : This,
    property : Key,
    factory : ()=>Type,
    writable ?: boolean,
    configurable ?: boolean
) : SetPropertyCallbackType2<This, Key, Type>

export function SetPropertyCallbackParameter<
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
            return MemoizeGetter.Parameter(
                object,
                <keyof This> property,
                factory(),
                writable,
                configurable
            );
        }
    });
}




export type SetPropertyCallbackArgument1<
    This extends object,
    Key extends keyof This
    > = {
    object : This,
    property : Key,
    factory : ()=>This[Key],
    writable ?: boolean,
    configurable ?: boolean
}

export type SetPropertyCallbackArgument2<
    This extends object,
    Key extends PropertyKey,
    Type
    > = {
    object : This,
    property : Key,
    factory : ()=>Type,
    writable ?: boolean,
    configurable ?: boolean
}



export type SetPropertyCallbackType1<
    This extends object,
    Key extends keyof This
    > = O.Readonly<Required<This, Key>>

export type SetPropertyCallbackType2<
    This extends object,
    Key extends PropertyKey,
    Type
    > = Omit<This, Key> & O.Readonly<Record<Key, Type>>



export function SetPropertyCallbackObject<
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
        writable,
        configurable,
    } : SetPropertyCallbackArgument1<This, Key>
) : SetPropertyCallbackType1<This, Key>

export function SetPropertyCallbackObject<
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
        writable,
        configurable,
    } : SetPropertyCallbackArgument2<This, Key, Type>
) : SetPropertyCallbackType2<This, Key, Type>

export function SetPropertyCallbackObject<
    This extends object,
    Key extends keyof This
    >(
    {
        object,
        property,
        factory,
        writable,
        configurable,
    } : SetPropertyCallbackArgument1<This, Key>
) {

    return SetPropertyCallbackParameter(object, property, factory, writable, configurable)
}
