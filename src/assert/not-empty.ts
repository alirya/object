import Guard from '../boolean/not-empty';
import Callback from '@alirya/function/assert/callback';
import NotEmptyError from './throwable/not-empty';

export default function NotEmpty(
    value : object,
    error : (value:object)=>Error = NotEmptyError.Parameters
) : asserts value is object {

    Callback.Parameters(value, Guard, error);
}
