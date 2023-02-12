import Guard from '../boolean/object.js';
import Callback from '@alirya/function/assert/callback.js';
import StringError from './throwable/object.js';

export default function Object_(
    value : unknown,
    error : (value:unknown)=>Error = StringError.Parameters
) : asserts value is object {

    Callback.Parameters(value, Guard, error);
}
