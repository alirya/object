import AssertObject from "../assert/object";
import ObjectError from "../assert/throwable/object";


export default function ObjectParameters(
    value : unknown,
    error : (value:unknown)=>Error = ObjectError.Parameter,
    //{
    //    value,
    //    error = ObjectError,
    //} : Value<unknown> & {error ?: (value:unknown)=>Error}
) : object {

    AssertObject(value, error);

    return value;
}

