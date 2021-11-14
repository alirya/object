import ValidatablesParameters from "./validatables-parameters";
import ValidatablesParameter from "./validatables-parameter";
//
// export default Validatables;
//
// export class ValidatablesParameter<
//     RecordType extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>,
//     Boolean extends boolean = boolean
// > implements ValidatablesType<RecordType, Boolean>
// {
//
//     // readonly validatables : RecordType;
//     // readonly validation : (value:RecordType)=>Boolean;
//     readonly valid : boolean;
//
//     constructor(
//         readonly validatables : RecordType,
//         readonly validation : (value:RecordType)=>Boolean,
//         //{
//         //    validatables,
//         //    validation,
//         //} : Validation<[RecordType], Boolean> & ValidatablesInterface<RecordType>
//     ) {
//         this.validatables = validatables;
//         this.validation = validation;
//
//         this.valid = this.validation(this.validatables);
//     }
// }
//
// export type ValidatablesType<
//     RecordType extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>,
//     Boolean extends boolean = boolean
// > = Validatable &
//     ValidatablesInterface<RecordType> &
//     {validation : (value:RecordType)=>Boolean}
//
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
var Validatables;
(function (Validatables) {
    Validatables.Parameters = ValidatablesParameters;
    Validatables.Parameter = ValidatablesParameter;
})(Validatables || (Validatables = {}));
export default Validatables;
//# sourceMappingURL=validatables.js.map