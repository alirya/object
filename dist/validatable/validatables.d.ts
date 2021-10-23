import Validatable from "@dikac/t-validatable/validatable";
import Validation from "@dikac/t-boolean/validation/validation";
import ValidatablesInterface from "./validatables/validatables";
export default class Validatables<RecordType extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>, Boolean extends boolean = boolean> implements Validatable, ValidatablesInterface<RecordType> {
    readonly validatables: RecordType;
    readonly validation: (value: RecordType) => Boolean;
    readonly valid: boolean;
    constructor({ validatables, validation, }: Validation<[RecordType], Boolean> & ValidatablesInterface<RecordType>);
}
