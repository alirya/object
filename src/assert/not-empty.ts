import Guard from "../boolean/not-empty";
import Callback from "@dikac/t-function/assert/callback";
import NotEmptyError from "./throwable/not-empty";

export default function NotEmpty(
    value : object,
    error : (value:object)=>Error = NotEmptyError.Parameter
) : asserts value is object {

    Callback.Parameter(value, Guard, error);
}
