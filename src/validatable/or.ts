import Validatable from "@dikac/t-validatable/validatable";
import OrBoolean from "./record/boolean/or";
import Validatables from "./validatables";

export default function Or<
    Object extends Partial<Record<PropertyKey, Validatable>>
>(
    validatables : Object
) : Validatables.Type<Object, boolean> {

    return new Validatables.Parameters(validatables, OrBoolean);
}
