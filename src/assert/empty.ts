import Guard from "../boolean/empty";
import Callback from "@alirya/function/assert/callback-parameters";
import EmptyError from "./throwable/empty-parameters";

export default function Empty(
    value : object,
    error : (value:object)=>Error = EmptyError
) : asserts value is object {

    Callback(value, Guard, error);
}
