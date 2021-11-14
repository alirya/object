export default class ValidatablesParameters {
    constructor(validatables, validation) {
        this.validatables = validatables;
        this.validation = validation;
        this.validatables = validatables;
        this.validation = validation;
        this.valid = this.validation(this.validatables);
    }
}
// export type ValidatablesArgument<
//     RecordType extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>,
//     Boolean extends boolean = boolean
// > =
//     Validatables<RecordType> &
//     // TODO CHANGE TO VALIDATOR
//     {validation : (value:RecordType)=>Boolean}
//
// export class ValidatablesObject<
//     RecordType extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>,
//     Boolean extends boolean = boolean
// > extends ValidatablesParameter<RecordType, Boolean> {
//
//     constructor({
//         validatables,
//         validation,
//     } : Validation<[RecordType], Boolean> & ValidatablesInterface<RecordType>) {
//         super(validatables, validation);
//     }
// }
//
//
// namespace Validatables {
//
//     export const Parameter = ValidatablesParameter;
//     export const Object = ValidatablesObject;
//     export type Argument<
//         RecordType extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>,
//         Boolean extends boolean = boolean
//     > = ValidatablesArgument<
//         RecordType,
//         Boolean
//     >;
//
//     export type Type<
//         RecordType extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>,
//         Boolean extends boolean = boolean
//     > = ValidatablesType<
//         RecordType,
//         Boolean
//     >;
// }
//# sourceMappingURL=validatables-parameters.js.map