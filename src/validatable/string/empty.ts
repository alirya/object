import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import EmptyParameter from "../../assert/string/empty";

/**
 * @deprecated
 * @param object
 * @constructor
 */
export default function Empty(object : Readonly<Value<object> & Validatable>) : string {

    return EmptyParameter(object)
}
