import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export declare type NotEmptyArgument = Validatable & Value<object> & {
    subject?: string;
};
export default function NotEmptyParameter({ valid, value, subject, }: NotEmptyArgument): string;
