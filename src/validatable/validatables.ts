import Validatable from "@dikac/t-validatable/validatable";
import Validation from "@dikac/t-boolean/validation/validation";
import ValidatablesInterface from "./validatables/validatables";

export default class Validatables<
    RecordType extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>,
    Boolean extends boolean = boolean
> implements
    Validatable,
    ValidatablesInterface<RecordType>
{

    readonly validatables : RecordType;
    readonly validation : (value:RecordType)=>Boolean;
    readonly valid : boolean;

    constructor(
        // public validatables : RecordType,
        // public validation : (value:RecordType)=>Boolean,
        {
            validatables,
            validation,
        } : Validation<[RecordType], Boolean> & ValidatablesInterface<RecordType>
    ) {
        this.validatables = validatables;
        this.validation = validation;

        this.valid = this.validation(this.validatables);
    }
}

