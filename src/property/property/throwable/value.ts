import PropertyValueArgument from "../../../assert/string/value";
import PropertyInterface from "../property";
import Value from "@dikac/t-value/value";
import Type from "@dikac/t-type/type";

export default function Value(data : PropertyInterface & {type: string}) : Error {

    return new Error(
        PropertyValueArgument({valid:false, ...data})
    );
}
