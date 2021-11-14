import Value from "@dikac/t-value/value";
import Property from "../property/property";
export declare type ReadableArgument = Value<object> & Property;
export default function ReadableParameter({ value, property, }: ReadableArgument): boolean;
