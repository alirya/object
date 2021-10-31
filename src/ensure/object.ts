import AssertObject from "../assert/object";
import ObjectError from "../assert/throwable/object";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";

export default Object_;
namespace Object_ {

    export const Parameter = ObjectParameter;
    export const Object = ObjectObject;
    export type Argument = ObjectArgument;
}

export function ObjectParameter(
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

export type ObjectArgument = Value<unknown> & {error ?: (value:unknown)=>Error};


export function ObjectObject(
    //value : unknown,
    //error : (value:unknown)=>Error = ObjectError,
    {
        value,
        error ,
    } : ObjectArgument
) : object {

    return ObjectParameter(value, error);

}
