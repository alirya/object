import Value from "@dikac/t-value/value";
import ObjectParameters from "./object-parameters";

export type ObjectArgument = Value<unknown> & {error ?: (value:unknown)=>Error};

export default function ObjectParameter(
    //value : unknown,
    //error : (value:unknown)=>Error = ObjectError,
    {
        value,
        error ,
    } : ObjectArgument
) : object {

    return ObjectParameters(value, error);

}
