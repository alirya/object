import * as assert from 'assert';
import {Required} from 'utility-types';
import Callable from '@axiona/function/callable.js';


export function PropertyParameters<
    Expect extends ObjectType[Key],
    ObjectType extends object = object,
    Key extends keyof ObjectType = keyof ObjectType,
>(
    object : ObjectType,
    property : Key,
    ensure : Callable<[ObjectType[Key]], Expect>
) : Omit<ObjectType, Key> & Record<Key, Expect>;

export function PropertyParameters<
    Expect extends unknown,
    ObjectType extends object = object,
    Key extends PropertyKey = PropertyKey,
>(
    object : ObjectType,
    property : Key,
    ensure : Callable<[(Key extends keyof ObjectType ? ObjectType[Key]: unknown)], Expect>
) : ObjectType & Record<Key, Expect>;

export function PropertyParameters<
    Expect extends unknown,
    ObjectType extends object = object,
    Key extends PropertyKey = PropertyKey,
>(
    object : ObjectType,
    property : Key,
    ensure : (value: (Key extends keyof ObjectType ? ObjectType[Key]: unknown)|Expect) => Expect
) : ObjectType & Record<Key, Expect> {

    ensure(object[property as string]);

    return object as ObjectType & Record<Key, Expect>;
}



type PropertyParameterArgumentStrict<
    Expect extends ObjectType[Key],
    ObjectType extends object,
    Key extends keyof ObjectType,
>  = {
    property : Key,
    ensure : Callable<[ObjectType[Key]], Expect>
};

type PropertyParameterArgumentDynamic<
    Expect extends unknown,
    ObjectType extends object,
    Key extends PropertyKey,
>  = {
    property : Key,
    ensure : Callable<[(Key extends keyof ObjectType ? ObjectType[Key]: unknown)], Expect>
};

export function PropertyParameter<
    Expect extends ObjectType[Key],
    ObjectType extends object,
    Key extends keyof ObjectType = keyof ObjectType,
>(
    object : ObjectType,
    {
        property,
        ensure,
    } : PropertyParameterArgumentStrict<Expect, ObjectType, Key>
) : Omit<ObjectType, Key> & Record<Key, Expect>;

export function PropertyParameter<
    Expect extends unknown,
    ObjectType extends object = object,
    Key extends PropertyKey = PropertyKey,
>(
    object : ObjectType,
    {
        property,
        ensure,
    } : PropertyParameterArgumentDynamic<Expect, ObjectType, Key>
) : ObjectType & Record<Key, Expect>;

export function PropertyParameter<
    Expect extends unknown,
    ObjectType extends object = object,
    Key extends PropertyKey = PropertyKey
>(
    object : ObjectType,
    {
        property,
        ensure,
    } : PropertyParameterArgumentDynamic<Expect, ObjectType, Key>
) : ObjectType & Record<Key, Expect> {

    return PropertyParameters(object, property, ensure);
}


namespace ExistsDeep {
    export const Parameters = PropertyParameters;
    export const Parameter = PropertyParameter;
    export type ParameterParameterArgumentStrict<
        Expect extends ObjectType[Key],
        ObjectType extends object,
        Key extends keyof ObjectType,
    > = PropertyParameterArgumentStrict<
        Expect,
        ObjectType,
        Key
    >;
    export type ParameterParameterArgumentDynamic<
        Expect extends unknown,
        ObjectType extends object,
        Key extends PropertyKey,
    > = PropertyParameterArgumentDynamic<
        Expect,
        ObjectType,
        Key
    >;
}
export default ExistsDeep;
