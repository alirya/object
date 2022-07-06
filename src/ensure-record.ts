import AssertList from './assert/record-parameters.js';
import {CallbackParameters} from '../../function/dist/ensure/callback.js';
import {RecordParameters} from './boolean/record.js';
import GuardValidation from '@alirya/boolean/validation/guard.js';

/**
 * Check if {@param list} is list of {@template Value}
 *
 * {@param validation} is use to validate for {@template Value}
 *
 * @param error
 */


export function EnsureRecordParameters<
    Object extends Record<PropertyKey, unknown>,
    Value extends Object[keyof Object],
    Result extends Record<keyof Object, Value>,
>(
    list : Object|Result,
    validation : (value:Object[keyof Object])=>value is Value,
    error : (value:unknown)=>Error,
) : Result {

    CallbackParameters(list, (value : Object)=>RecordParameters(value, validation), error);
    AssertList(list, validation, error);

    return list;
}


/**
 * Check if {@param list} is list of {@template Value}
 *
 * {@param validation} is use to validate for {@template Value}
 *
 * @param error
 */


export function EnsureRecordParameter<
    Object extends Record<PropertyKey, unknown>,
    Value extends Object[keyof Object],
    Result extends Record<keyof Object, Value>,
>(
    list : Object|Result,
    {validation, error} : GuardValidation<Object[keyof Object], Value> & {error : (value:unknown)=>Error}
) : Result {

    return EnsureRecordParameters(list, validation, error) as Result;
}


namespace EnsureRecord {
    export const Parameters = EnsureRecordParameters;
    export const Parameter = EnsureRecordParameter;
}
export default EnsureRecord;
