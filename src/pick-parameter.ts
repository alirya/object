import {List} from 'ts-toolbelt';
import Object_ from './object/object';
import PickParameters from './pick-parameters';

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
export default function PickParameter<
    ObjectType extends object,
    Key extends (keyof ObjectType)[]
>(  {
        object,
        keys
    } : Object_<ObjectType> & { keys : Key }
) : globalThis.Pick<ObjectType, List.UnionOf<Key>> {

    return PickParameters(object, ...keys);
}
