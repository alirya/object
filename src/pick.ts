import {List} from 'ts-toolbelt';
import {ReadableParameters} from './property/boolean/readable.js';
import Object_ from './object/object.js';

/**
 * implementation of {@link globalThis.Pick}
 *
 * get defined or getter property value from {@param object} by {@param keys}
 *
 * @param object
 * source
 *
 * @param keys
 * key for selection
 */
export function PickParameters<
    ObjectType extends object,
    Key extends ReadonlyArray<keyof ObjectType> = ReadonlyArray<keyof ObjectType>
>(object : ObjectType, ...keys : Key) : globalThis.Pick<ObjectType, List.UnionOf<Key>> {

    const result = {};

    for (const property of keys) {

        if(ReadableParameters(object, property)) {

            result[<PropertyKey>property] = object[property];
        }
    }

    return result as globalThis.Pick<ObjectType, List.UnionOf<Key>>;
}



/**
 * implementation of {@link globalThis.Pick}
 *
 * get value from {@param object} by {@param keys}
 *
 * @param object
 * source
 *
 * @param keys
 * key for selection
 */
export function PickParameter<
    ObjectType extends object,
    Key extends (keyof ObjectType)[]
>(  {
        object,
        keys
    } : Object_<ObjectType> & { keys : Key }
) : globalThis.Pick<ObjectType, List.UnionOf<Key>> {

    return PickParameters(object, ...keys);
}


namespace Pick {
    export const Parameters = PickParameters;
    export const Parameter = PickParameter;
}
export default Pick;
