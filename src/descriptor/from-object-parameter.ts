import Value from "@alirya/value/value";
import Property from "../property/property/property";
import FromObjectParameters from "./from-objecparameters";

export type FromObjectArgument = Value<object> & Property;

export default function FromObjectParameter(
    {value, property} : FromObjectArgument
) : undefined|PropertyDescriptor {

    return FromObjectParameters(value, property);
}
