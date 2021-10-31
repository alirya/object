import Value from "@dikac/t-value/value";
import Property from "../property/property";
export default Readable;
declare namespace Readable {
    const Parameter: typeof ReadableParameter;
    const Object: typeof ReadableObject;
    type Argument = ReadableArgument;
}
/**
 * check if property is readable
 */
export declare function ReadableParameter(value: object, property: PropertyKey): boolean;
export declare type ReadableArgument = Value<object> & Property;
export declare function ReadableObject({ value, property, }: ReadableArgument): boolean;
