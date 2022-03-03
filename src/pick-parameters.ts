import {List} from 'ts-toolbelt';
import ReadableParameters from "./property/boolean/readable-parameters";

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
export default function PickParameters<
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

