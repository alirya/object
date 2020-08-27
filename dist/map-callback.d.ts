import Map from "./map";
/**
 * Calls {@param replace} on each property value from {@param object} recursively
 *
 * {@template Replace} type of replace result
 *
 */
export default function MapCallback<Object extends Record<PropertyKey, unknown>, Replace = unknown>(object: Object, replace: (value: Object[keyof Object], key: keyof Object) => Replace): Map<Object, Replace>;
/**
 * support for partial type
 */
export default function MapCallback<Object extends Partial<Record<PropertyKey, unknown>>, Replace = unknown>(object: Object, replace: (value: Object[keyof Object] | undefined, key: keyof Object) => Replace): Partial<Map<Object, Replace>>;
