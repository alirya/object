import PropertyValueMessage from "../string/value";
import Property from "../../property/property/property";

export default function Value(
    // property : PropertyKey,
    // type : string,
    {
        property,
        type
    } : {type:string} & Property
) : Error {

    return new Error(PropertyValueMessage({valid:false, property, type}))
}
