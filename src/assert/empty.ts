import Guard from '../boolean/empty';
import Callback from '@alirya/function/assert/callback';
import EmptyError from './throwable/empty';

export default function Empty(
    value : object,
    error : (value:object)=>Error = EmptyError.Parameters
) : asserts value is object {

    Callback.Parameters(value, Guard, error);
}
