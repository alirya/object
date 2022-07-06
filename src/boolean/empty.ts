import IsEmptyObject from 'is-empty-object.js';

/**
 * check if object is empty (contain zero property & method)
 */
export default function Empty (
    value : object
) : boolean {

    return IsEmptyObject(value);
}
