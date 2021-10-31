import Validatable from "@dikac/t-validatable/validatable";
import Property from "../../property/property/property";
export default ValueValidation;
declare namespace ValueValidation {
    const Parameter: typeof ValueValidationParameter;
    const Object: typeof ValueValidationObject;
    type Argument = ValueValidationArgument;
}
export declare function ValueValidationParameter(property: PropertyKey, valid: boolean, type: string, validation: string): string;
export declare type ValueValidationArgument = Validatable & Property & {
    type: string;
} & {
    validation: string;
};
export declare function ValueValidationObject({ valid, property, type, validation, }: ValueValidationArgument): string;
