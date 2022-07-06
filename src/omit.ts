import Object_ from './object/object.js';
import {List} from 'ts-toolbelt';
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
export function OmitParameters<
    ObjectType extends object,
    Keys extends (keyof ObjectType)[]
>(
    object : ObjectType,
    ... keys : Keys
) : Omit<ObjectType, List.UnionOf<Keys>> {

    let result = {};

    for(let [property, value] of Object.entries(object)) {

        if(keys.includes(<keyof ObjectType>property)) {

            continue;
        }

        result[property] = value;
    }

    return result as Omit<ObjectType, List.UnionOf<Keys>>;

}


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
export function OmitParameter<
    ObjectType extends object,
    Keys extends (keyof ObjectType)[]
>(  {
        object,
        keys
    } : Object_<ObjectType> & {keys:Keys}
) : Omit<ObjectType, List.UnionOf<Keys>> {

    return OmitParameters(object, ...keys);
}


namespace Omit {
    export const Parameters = OmitParameters;
    export const Parameter = OmitParameter;
}
export default Omit;
