import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export default Compatible;
declare namespace Compatible {
    const Parameter: typeof CompatibleParameter;
    const Object: typeof CompatibleObject;
    type Argument = CompatibleArgument;
}
export declare function CompatibleParameter(value: unknown, valid: boolean, expect: string, subject?: string, conversion?: (value: unknown) => string): string;
export declare type CompatibleArgument = Validatable & Value & {
    expect: string;
    subject?: string;
    conversion: (value: unknown) => string;
};
export declare function CompatibleObject({ valid, value, expect, subject, conversion, }: CompatibleArgument): string;
