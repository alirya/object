import Value from "@dikac/t-value/value";
import Property from "../property/property/property";
export declare type FromObjectArgument = Value<object> & Property;
export default function FromObjectParameter({ value, property }: FromObjectArgument): undefined | PropertyDescriptor;
