import Object_ from "./object";
import ObjectString from "../validatable/string/object";

export default function NotEmptyStandard() : Object_<string> {

    return new Object_(ObjectString);
}
