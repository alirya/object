import Value from "@dikac/t-value/value";
import Property from "../property/property";
import { ReadableParameter } from "./readable";
export default Writable;
declare namespace Writable {
    const Parameter: typeof ReadableParameter;
    const Object: typeof ReadableObject;
    type Argument = ReadableArgument;
}
/**
 * check if property is writable
 */
export declare function WritableParameter(value: object, property: PropertyKey): boolean;
export declare type ReadableArgument = Value<object> & Property;
export declare function ReadableObject({ value, property, }: ReadableArgument): boolean;
