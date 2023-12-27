import Guard from '../boolean/empty.js';
import Callback from '@axiona/function/assert/callback.js';
import EmptyError from './throwable/empty.js';

export default function Empty(
    value : object,
    error : (value:object)=>Error = EmptyError.Parameters
) : asserts value is object {

    Callback.Parameters(value, Guard, error);
}
