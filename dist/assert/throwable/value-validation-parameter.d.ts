import Validatable from "@dikac/t-validatable/validatable";
import Property from "../../property/property/property";
export declare type ValueValidationArgument = Validatable & Property & {
    type: string;
} & {
    validation: string;
};
export default function ValueValidationParameter({ property, type, validation, }: ValueValidationArgument): Error;
