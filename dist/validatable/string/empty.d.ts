import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
/**
 * @deprecated
 * @param object
 * @constructor
 */
export default function Empty(object: Readonly<Value<object> & Validatable>): string;
