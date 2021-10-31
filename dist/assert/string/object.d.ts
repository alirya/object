import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export default Object_;
declare namespace Object_ {
    const Parameter: typeof ObjectParameter;
    const Object: typeof ObjectObject;
    type Argument = ObjectArgument;
}
export declare function ObjectParameter(value: unknown, valid: boolean, subject?: string, conversion?: (value: unknown) => string): string;
export declare type ObjectArgument = Validatable & Value & {
    subject?: string;
} & {
    conversion?: (value: unknown) => string;
};
export declare function ObjectObject({ valid, value, subject, conversion, }: ObjectArgument): string;
