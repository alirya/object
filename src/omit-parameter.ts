import {List} from 'ts-toolbelt';
import Object_ from './object/object.js';
import OmitParameters from './omit-parameters.js';
/**
 * implementation of {@link globalThis.Omit}
 *
 * get new object from {@param object} except key in {@param keys}
 *
 * @param object
 * source
 *
 * @param keys
 * key for exclusion
 */
export default function OmitParameter<
    ObjectType extends object,
    Keys extends (keyof ObjectType)[]
>(  {
        object,
        keys
    } : Object_<ObjectType> & {keys:Keys}
) : Omit<ObjectType, List.UnionOf<Keys>> {

    return OmitParameters(object, ...keys);
}
