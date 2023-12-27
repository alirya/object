import AssertObject from '../assert/object.js';
import ObjectError from '../assert/throwable/object.js';
import Value from '@axiona/value/value.js';


export function ObjectParameters(
    value : unknown,
    error : (value:unknown)=>Error = ObjectError.Parameters,
) : object {

    AssertObject(value, error);

    return value;
}


export type ObjectArgument = Value<unknown> & {error ?: (value:unknown)=>Error};

export function ObjectParameter(
    {
        value,
        error ,
    } : ObjectArgument
) : object {

    return ObjectParameters(value, error);

}


namespace Object {
    export const Parameters = ObjectParameters;
    export const Parameter = ObjectParameter;
    export type Argument = ObjectArgument;
}
export default Object;
