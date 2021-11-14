import Validatable from "@dikac/t-validatable/validatable";
import Validation from "@dikac/t-boolean/validation/validation";
import ValidatablesInterface from "./validatables/validatables";
import ValidatablesParameters from "./validatables-parameters";
export default class ValidatablesParameter<RecordType extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>, Boolean extends boolean = boolean> extends ValidatablesParameters<RecordType, Boolean> {
    constructor({ validatables, validation, }: Validation<[RecordType], Boolean> & ValidatablesInterface<RecordType>);
}
