import Guard from "../boolean/object";
import Callback from "@dikac/t-function/assert/callback";
import StringError from "./throwable/object";

export default function Object_(
    value : unknown,
    error : (value:unknown)=>Error = StringError.Parameter
) : asserts value is object {

    Callback.Parameter(value, Guard, error);
}
