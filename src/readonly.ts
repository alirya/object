import {Readonly} from 'ts-toolbelt/out/Object/Readonly.js';
import {UnionOf} from 'ts-toolbelt/out/List/UnionOf.js';
import {WritableParameters} from './property/boolean/writable.js';
import Object_ from './object/object.js';

export type ReadonlyPropertiesReturn<Keys extends (keyof Type)[], Type extends object> = Readonly<Type, UnionOf<Keys>>;

export function ReadonlyParameters<Type extends object>(
    object : Type,
) : Readonly<Type>;

export function ReadonlyParameters<Keys extends (keyof Type)[], Type extends object>(
    object : Type,
    ...properties: Keys
) : ReadonlyPropertiesReturn<Keys, Type>;

export function ReadonlyParameters<Keys extends (keyof Type)[], Type extends object>(
    object : Type,
    ...properties: Keys
) : ReadonlyPropertiesReturn<Keys, Type> {

    if(!properties.length) {

        properties = Object.keys(object) as Keys;
    }

    for (const property of properties) {

        if(WritableParameters(object, property)) {

            Object.defineProperty(object, property, {
                writable: false
            });
        }
    }

    return object as ReadonlyPropertiesReturn<Keys, Type>;
}


export function ReadonlyParameter<Keys extends (keyof Type)[], Type extends object>(
    {
        object,
    } : Object_<Type>
) : ReadonlyPropertiesReturn<Keys, Type>;

export function ReadonlyParameter<Keys extends (keyof Type)[], Type extends object>(
    {
        object,
        properties
    } : Object_<Type> & {
        properties : Keys
    }
) : ReadonlyPropertiesReturn<Keys, Type>;

export function ReadonlyParameter<Keys extends (keyof Type)[], Type extends object>(
    {
        object,
        properties
    } : Object_<Type> & {
        properties ?: Keys
    }
) : ReadonlyPropertiesReturn<Keys, Type> {

    if(!properties) {

        properties =  Object.keys(object) as Keys;
    }

    return ReadonlyParameters(object, ...properties);
}

namespace Readonly {
    export const Parameters = ReadonlyParameters;
    export const Parameter = ReadonlyParameter;
    export type sReturn<Keys extends (keyof Type)[], Type extends object> = ReadonlyPropertiesReturn<Keys, Type>;
}
export default Readonly;
