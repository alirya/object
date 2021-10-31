import Validatable from "@dikac/t-validatable/validatable";
import Property from "../../property/property/property";
import Value from "@dikac/t-value/value";
export default Value;
declare namespace Value {
    const Parameter: typeof ValueParameter;
    const Object: typeof ValueObject;
    type Argument = ValueArgument;
}
/**
 * {@param valid} type is valid or not
 * {@param property} object property
 * {@param type} expected type
 */
export declare function ValueParameter(property: PropertyKey, valid: boolean, type: string): string;
export declare type ValueArgument = Validatable & Property & {
    type: string;
};
export declare function ValueObject({ valid, property, type, }: ValueArgument): string;
