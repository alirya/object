import * as assert from 'assert';
import {Required} from 'utility-types';
import {ExistsDeepParameter, ExistsDeepParameters} from '../boolean/exists-deep.js';


export function PropertyParameters<
    Expect extends ObjectType[Key],
    ObjectType extends {} = {},
    Key extends keyof ObjectType = keyof ObjectType,
>(
    object : ObjectType|(Omit<ObjectType, Key> & Record<Key, Expect>),
    property : Key,
    assertion : (value: ObjectType[Key]) => asserts value is Expect
) : asserts object is Omit<ObjectType, Key> & Record<Key, Expect>;

export function PropertyParameters<
    Expect extends unknown,
    ObjectType extends {} = {},
    Key extends PropertyKey = PropertyKey,
>(
    object : ObjectType,
    property : Key,
    assertion : (value: (Key extends keyof ObjectType ? ObjectType[Key]: unknown)|unknown) => asserts value is Expect
) : asserts object is ObjectType & Record<Key, Expect>;

export function PropertyParameters<
    Expect extends unknown,
    ObjectType extends {},
    Key extends PropertyKey,
    ExpectObject extends ObjectType & Record<Key, Expect>
>(
    object : ObjectType,
    property : Key,
    assertion : (value: (Key extends keyof ObjectType ? ObjectType[Key]: unknown)|unknown) => asserts value is Expect
) : asserts object is ExpectObject {

    assertion(object[property as string]);
}



type PropertyParameterArgumentStrict<
    Expect extends ObjectType[Key],
    ObjectType extends {},
    Key extends keyof ObjectType,
>  = {
    property : Key,
    assertion : (value: ObjectType[Key]) => asserts value is ObjectType[Key]
};

type PropertyParameterArgumentDynamic<
    Expect extends unknown,
    ObjectType extends {},
    Key extends PropertyKey,
>  = {
    property : Key,
    assertion : (value: (Key extends keyof ObjectType ? ObjectType[Key]: unknown)|Expect) => asserts value is Expect
};

export function PropertyParameter<
    Expect extends ObjectType[Key],
    ObjectType extends {} = {},
    Key extends keyof ObjectType = keyof ObjectType,
>(
    object : ObjectType,
    {
        property,
        assertion,
    } : PropertyParameterArgumentStrict<Expect, ObjectType, Key>
) : asserts object is ObjectType;

export function PropertyParameter<
    Expect extends unknown,
    ObjectType extends {} = {},
    Key extends PropertyKey = PropertyKey,
>(
    object : ObjectType,
    {
        property,
        assertion,
    } : PropertyParameterArgumentDynamic<Expect, ObjectType, Key>
) : asserts object is ObjectType & Record<Key, Expect>;

export function PropertyParameter<
    Expect extends unknown,
    ObjectType extends {},
    Key extends PropertyKey,
    ExpectObject extends ObjectType & Record<Key, Expect>
>(
    object : ObjectType,
    {
        property,
        assertion,
    } : PropertyParameterArgumentDynamic<Expect, ObjectType, Key>
) : asserts object is ExpectObject {

    PropertyParameters(object, property, assertion);
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
