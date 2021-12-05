import AssertObject from "../assert/object";
import ObjectError from "../assert/throwable/object";


export default function ObjectParameters(
    value : unknown,
    error : (value:unknown)=>Error = ObjectError.Parameter,
) : object {

    AssertObject(value, error);

    return value;
}

