import Value from "@dikac/t-value/value";
import Property from "../property/property/property";
import FromObjectParameters from "./from-object-parameters";

export type FromObjectArgument = Value<object> & Property;

export default function FromObjectParameter(
    {value, property} : FromObjectArgument
) : undefined|PropertyDescriptor {

    return FromObjectParameters(value, property);
}
