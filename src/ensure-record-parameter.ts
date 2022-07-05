import Guard from '@alirya/boolean/validation/guard';
import EnsureRecordParameters from './ensure-record-parameters';
import GuardValidation from '@alirya/boolean/validation/guard';

/**
 * Check if {@param list} is list of {@template Value}
 *
 * {@param validation} is use to validate for {@template Value}
 *
 * @param error
 */


export default function EnsureRecordParameter<
    Object extends Record<PropertyKey, unknown>,
    Value extends Object[keyof Object],
    Result extends Record<keyof Object, Value>,
>(
    list : Object|Result,
    {validation, error} : GuardValidation<Object[keyof Object], Value> & {error : (value:unknown)=>Error}
) : Result {

    return EnsureRecordParameters(list, validation, error) as Result;
}
