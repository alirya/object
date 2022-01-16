import Validatable from '@alirya/validatable/validatable';
import ValidatablesInterface from './validatables/validatables';

export type ValidatablesType<
    RecordType extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>,
    Boolean extends boolean = boolean
    > = Validatable &
    ValidatablesInterface<RecordType> &
    {validation : (value:RecordType)=>Boolean};

export default class ValidatablesParameters<
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
