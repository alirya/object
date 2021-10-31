import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Property from "../../property/property/property";
export default NotEmpty;
declare namespace NotEmpty {
    const Parameter: typeof NotEmptyParameter;
    const Object: typeof NotEmptyObject;
    type Argument = NotEmptyArgument;
}
export declare function NotEmptyParameter(value: any, subject?: string): Error;
export declare type NotEmptyArgument = Validatable & Property & {
    type: string;
} & {
    validation: string;
};
export declare function NotEmptyObject({ value, subject, }: Value & {
    subject?: string;
}): Error;
