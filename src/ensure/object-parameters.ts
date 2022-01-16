import AssertObject from '../assert/object';
import ObjectError from '../assert/throwable/objecparameter';


export default function ObjectParameters(
    value : unknown,
    error : (value:unknown)=>Error = ObjectError,
) : object {

    AssertObject(value, error);

    return value;
}

