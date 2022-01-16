import Value from "@alirya/value/value";
import EmptyArgument from "../../boolean/empty";

export default function Empty(
    object : Value<object>,
) : boolean {

    return EmptyArgument(object.value)
}
