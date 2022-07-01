import Guard from '../boolean/object';
import Callback from '@alirya/function/assert/callback';
import StringError from './throwable/object';

export default function Object_(
    value : unknown,
    error : (value:unknown)=>Error = StringError.Parameters
) : asserts value is object {

    Callback.Parameters(value, Guard, error);
}
