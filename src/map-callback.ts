import Map from './map';

// TODO MERGE WITH MAP?
/**
 * Calls {@param replace} on each property value from {@param object}
 *
 * {@template Replace} type of replace result
 *
 */
export default function MapCallback<
    Object extends Record<PropertyKey, any>,
    Replace = unknown
>(
    object : Object,
    replace : (value : Object[keyof Object], key : keyof Object) => Replace,
) : Map<Object, Replace>;
/**
 * support for partial type
 */
export default function MapCallback<
    Object extends Partial<Record<PropertyKey, any>>,
    Replace = unknown
>(
    object : Object,
    replace : (value : Object[keyof Object]|undefined, key : keyof Object) => Replace,
) : Partial<Map<Object, Replace>>;

export default function MapCallback<
    Object extends object,
    Replace = unknown
>(
    object : Object,
    replace : (value : Object[keyof Object], key : keyof Object) => Replace,
) : Map<Object, Replace> | Partial<Map<Object, Replace>> {

    let result = {};

    for(const property in object) {

        const value = object[property];

        result[<PropertyKey>property] = replace(value, property);
    }

    return <Map<Object, Replace>> result;
}

