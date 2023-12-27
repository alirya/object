import Guard from '../boolean/not-empty.js';
import Callback from '@axiona/function/assert/callback.js';
import NotEmptyError from './throwable/not-empty.js';

export default function NotEmpty(
    value : object,
    error : (value:object)=>Error = NotEmptyError.Parameters
) : asserts value is object {

    Callback.Parameters(value, Guard, error);
}
