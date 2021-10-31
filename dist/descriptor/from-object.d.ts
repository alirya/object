import Value from "@dikac/t-value/value";
import Property from "../property/property/property";
export default FromObject;
declare namespace FromObject {
    const Parameter: typeof FromObjectParameter;
    const Object: typeof FromObjectObject;
    type Argument = FromObjectArgument;
}
export declare function FromObjectParameter(value: object, property: PropertyKey): undefined | PropertyDescriptor;
export declare type FromObjectArgument = Value<object> & Property;
export declare function FromObjectObject({ value, property }: FromObjectArgument): undefined | PropertyDescriptor;
