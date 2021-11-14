import Validatable from "@dikac/t-validatable/validatable";
import ValidatablesParameters, { ValidatablesType } from "./validatables-parameters";
import ValidatablesParameter from "./validatables-parameter";
declare namespace Validatables {
    const Parameters: typeof ValidatablesParameters;
    const Parameter: typeof ValidatablesParameter;
    type Type<RecordType extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>, Boolean extends boolean = boolean> = ValidatablesType<RecordType, Boolean>;
}
export default Validatables;
