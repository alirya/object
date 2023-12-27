import GuardValidation from '@axiona/boolean/validation/guard.js';
import RecordParameters from './record-parameters.js';

/**
 * assert if {@param list} is list of {@template Value}
 *
 * {@param validation} is use to validate for {@template list}
 *
 * @param error
 */


export default function RecordParameter<
    Object extends Record<PropertyKey, unknown>,
    Value extends Object[keyof Object],
    Result extends Record<keyof Object, Value>,
>(
    list : Object|Result,
    {validation, error} : GuardValidation<Object[keyof Object], Value> & {error : (value:unknown)=>Error}
) : asserts list is Result {

    return RecordParameters(list, validation, error);
}

