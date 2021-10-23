import AssertObject from "../assert/object";
import ObjectError from "../assert/throwable/object";
import Value from "@dikac/t-value/value";

export default function Object_(
    //value : unknown,
    //error : (value:unknown)=>Error = ObjectError,
    {
        value,
        error = ObjectError,
    } : Value<unknown> & {error ?: (value:unknown)=>Error}
) : object {

    AssertObject(value, error);

    return value;
}
