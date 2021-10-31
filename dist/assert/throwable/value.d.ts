import Property from "../../property/property/property";
import { ObjectArgument, ObjectObject, ObjectParameter } from "./object";
export default Value;
declare namespace Value {
    const Parameter: typeof ObjectParameter;
    const Object: typeof ObjectObject;
    type Argument = ObjectArgument;
}
export declare function ValueParameter(property: PropertyKey, type: string): Error;
export declare type ValueArgument = {
    type: string;
} & Property;
export declare function ValueObject({ property, type }: {
    type: string;
} & Property): Error;
