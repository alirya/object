import Validatable from "@dikac/t-validatable/validatable";
import Validatables from "./validatables";
export default function Or<Object extends Partial<Record<PropertyKey, Validatable>>>(validatables: Object): Validatables<Object, boolean>;
