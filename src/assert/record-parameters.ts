import Callback from '@alirya/function/assert/callback-parameters';
import Guard from '../boolean/record-parameters';
import Map from '../map';


/**
 * assert if {@param list} is list of {@template Value}
 *
 * {@param validation} is use to validate for {@template list}
 *
 * @param error
 */

export default function RecordParameters<
    Object extends Record<PropertyKey, unknown>,
    Value extends Object[keyof Object],
    Result extends Record<keyof Object, Value>,
>(
    list : Object|Result,
    validation : (value:Object[keyof Object])=>value is Value,
    error : (value:unknown)=>Error,
) : asserts list is Result {

    Callback(list, (value : Object)=>Guard(value, validation), error);
}
