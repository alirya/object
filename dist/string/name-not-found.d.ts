import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export default NameNotFound;
declare namespace NameNotFound {
    const Parameter: typeof NameNotFoundParameter;
    const Object: typeof NameNotFoundObject;
    type Argument = NameNotFoundArgument;
}
export declare function NameNotFoundParameter(valid: boolean, value: unknown, subject?: string, conversion?: (value: unknown) => string): string;
export declare type NameNotFoundArgument = Validatable & Value & {
    subject?: string;
    conversion?: (value: unknown) => string;
};
export declare function NameNotFoundObject({ valid, value, subject, conversion, }: NameNotFoundArgument): string;
