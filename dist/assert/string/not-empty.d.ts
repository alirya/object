import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export default NotEmpty;
declare namespace NotEmpty {
    const Parameter: typeof NotEmptyParameter;
    const Object: typeof NotEmptyObject;
    type Argument = NotEmptyArgument;
}
/**
 * string intended for not NotEmpty object
 *
 * @param valid
 * @param value
 * @param subject
 */
export declare function NotEmptyParameter(value: object, valid: boolean, subject?: string): string;
export declare type NotEmptyArgument = Validatable & Value<object> & {
    subject?: string;
};
export declare function NotEmptyObject({ valid, value, subject, }: NotEmptyArgument): string;
