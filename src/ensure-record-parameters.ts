import AssertList from './assert/record-parameters';
import Callback from '../../function/dist/ensure/callback-parameters';
import Guard from './boolean/record-parameters';

/**
 * Check if {@param list} is list of {@template Value}
 *
 * {@param validation} is use to validate for {@template Value}
 *
 * @param error
 */


export default function EnsureRecordParameters<
    Object extends Record<PropertyKey, unknown>,
    Value extends Object[keyof Object],
    Result extends Record<keyof Object, Value>,
>(
    list : Object|Result,
    validation : (value:Object[keyof Object])=>value is Value,
    error : (value:unknown)=>Error,
) : Result {

    Callback(list, (value : Object)=>Guard(value, validation), error);
    AssertList(list, validation, error);

    return list;
}
