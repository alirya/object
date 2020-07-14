import PropertyInterface from "../property";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
export default function PropertyValue(data: PropertyInterface & Value<string> & Validatable): string;
