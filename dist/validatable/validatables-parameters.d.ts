import Validatable from "@dikac/t-validatable/validatable";
import ValidatablesInterface from "./validatables/validatables";
export declare type ValidatablesType<RecordType extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>, Boolean extends boolean = boolean> = Validatable & ValidatablesInterface<RecordType> & {
    validation: (value: RecordType) => Boolean;
};
export default class ValidatablesParameters<RecordType extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>, Boolean extends boolean = boolean> implements ValidatablesType<RecordType, Boolean> {
    readonly validatables: RecordType;
    readonly validation: (value: RecordType) => Boolean;
    readonly valid: boolean;
    constructor(validatables: RecordType, validation: (value: RecordType) => Boolean);
}
