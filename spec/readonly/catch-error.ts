import Callable from '@axiona/function/callable.js';

export default function CatchError<Callback extends Callable>(callback: Callback) : ReturnType<Callback>|Error {

    try {

        return callback() as ReturnType<Callback>;

    } catch (error) {

        return error;
    }
}
