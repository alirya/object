import Callable from "@alirya/function/callable";

export default function CatchError<Callback extends Callable>(callback: Callback) : ReturnType<Callback>|Error {

    try {

        return callback();

    } catch (error) {

        return error;
    }
}