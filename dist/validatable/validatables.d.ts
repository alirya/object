import Validatable from "@dikac/t-validatable/validatable";
import Validation from "@dikac/t-boolean/validation/validation";
import ValidatablesInterface from "./validatables/validatables";
import Validatables from "./validatables/validatables";
export default Validatables;
export declare class ValidatablesParameter<RecordType extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>, Boolean extends boolean = boolean> implements ValidatablesType<RecordType, Boolean> {
    readonly validatables: RecordType;
    readonly validation: (value: RecordType) => Boolean;
    readonly valid: boolean;
    constructor(validatables: RecordType, validation: (value: RecordType) => Boolean);
}
export declare type ValidatablesType<RecordType extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>, Boolean extends boolean = boolean> = Validatable & ValidatablesInterface<RecordType> & {
    validation: (value: RecordType) => Boolean;
};
export declare type ValidatablesArgument<RecordType extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>, Boolean extends boolean = boolean> = Validatables<RecordType> & {
    validation: (value: RecordType) => Boolean;
};
export declare class ValidatablesObject<RecordType extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>, Boolean extends boolean = boolean> extends ValidatablesParameter<RecordType, Boolean> {
    constructor({ validatables, validation, }: Validation<[RecordType], Boolean> & ValidatablesInterface<RecordType>);
}
declare namespace Validatables {
    const Parameter: typeof ValidatablesParameter;
    const Object: typeof ValidatablesObject;
    type Argument<RecordType extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>, Boolean extends boolean = boolean> = ValidatablesArgument<RecordType, Boolean>;
    type Type<RecordType extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>, Boolean extends boolean = boolean> = ValidatablesType<RecordType, Boolean>;
}
