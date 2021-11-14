import Validatable from "@dikac/t-validatable/validatable";
import Property from "../../property/property/property";
export declare type ValueArgument = Validatable & Property & {
    type: string;
};
export default function ValueParameter({ valid, property, type, }: ValueArgument): string;
