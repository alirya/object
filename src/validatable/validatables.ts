import Validatable from '@axiona/validatable/validatable.js';
import ValidatablesInterface from './validatables/validatables.js';
import Validation from '@axiona/boolean/validation/validation.js';

export type ValidatablesType<
    RecordType extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>,
    Boolean extends boolean = boolean
    > = Validatable &
    ValidatablesInterface<RecordType> &
    {validation : (value:RecordType)=>Boolean};

export class ValidatablesParameters<
    RecordType extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>,
    Boolean extends boolean = boolean
> implements ValidatablesType<RecordType, Boolean>
{
    readonly valid : boolean;

    constructor(
        readonly validatables : RecordType,
        readonly validation : (value:RecordType)=>Boolean,
    ) {
        this.validatables = validatables;
        this.validation = validation;

        this.valid = this.validation(this.validatables);
    }
}


export class ValidatablesParameter<
    RecordType extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>,
    Boolean extends boolean = boolean
> extends ValidatablesParameters<RecordType, Boolean> {

    constructor({
        validatables,
        validation,
    } : Validation<[RecordType], Boolean> & ValidatablesInterface<RecordType>) {
        super(validatables, validation);
    }
}



namespace Validatables {
    export const Parameters = ValidatablesParameters;
    export const Parameter = ValidatablesParameter;
}
export default Validatables;
