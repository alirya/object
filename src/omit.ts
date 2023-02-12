import Object_ from './object/object.js';
import {List} from 'ts-toolbelt';

/**
 * Strict Omit
 * native, {@package utility-types}, {@package ts-toolbelt} does not provide strict
 */
export type OmitStrict<Object extends object, Key extends keyof Object> = globalThis.Omit<Object, Key>;
export type OmitType<
    ObjectType extends object,
    Keys extends (keyof ObjectType)[]
> = OmitStrict<ObjectType, List.UnionOf<Keys>>;

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
) : OmitType<ObjectType, Keys> {

    const result = {};

    for(const [property, value] of Object.entries(object)) {

        if(keys.includes(<keyof ObjectType>property)) {

            continue;
        }

        result[property] = value;
    }

    return result as OmitType<ObjectType, Keys>;

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
) : OmitType<ObjectType, Keys> {

    return OmitParameters(object, ...keys);
}


namespace Omit {
    export const Parameters = OmitParameters;
    export const Parameter = OmitParameter;
}
export default Omit;
