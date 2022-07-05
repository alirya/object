import {CallbackParameters} from '@alirya/function/assert/callback';
import Guard from '../boolean/record';
import GuardValidation from '@alirya/boolean/validation/guard';


/**
 * assert if {@param list} is list of {@template Value}
 *
 * {@param validation} is use to validate for {@template list}
 *
 * @param error
 */

export function RecordParameters<
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


/**
 * assert if {@param list} is list of {@template Value}
 *
 * {@param validation} is use to validate for {@template list}
 *
 * @param error
 */


export function RecordParameter<
    Object extends Record<PropertyKey, unknown>,
    Value extends Object[keyof Object],
    Result extends Record<keyof Object, Value>,
>(
    list : Object|Result,
    {validation, error} : GuardValidation<Object[keyof Object], Value> & {error : (value:unknown)=>Error}
) : asserts list is Result {

    return RecordParameters(list, validation, error);
}



namespace Record {
    export const Parameters = RecordParameters;
    export const Parameter = RecordParameter;
}
export default Record;
