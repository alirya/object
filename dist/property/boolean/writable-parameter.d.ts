import Value from "@dikac/t-value/value";
import Property from "../property/property";
export declare type WritableArgument = Value<object> & Property;
export default function WritableParameter({ value, property, }: WritableArgument): boolean;
