import Guard from '../boolean/object';
import Callback from '@alirya/function/assert/callback-parameters';
import StringError from './throwable/object-parameters';

export default function Object_(
    value : unknown,
    error : (value:unknown)=>Error = StringError
) : asserts value is object {

    Callback(value, Guard, error);
}
