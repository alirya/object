import {CallbackParameters} from '@axiona/function/assert/callback.js';
import Guard from '../boolean/record.js';
import Map from '../map.js';


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

    CallbackParameters(list, (value : Object)=>Guard.Parameters(value, validation), error);
}
