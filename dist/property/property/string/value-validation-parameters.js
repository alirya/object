import PropertyValueArgumentValidation from "../../../assert/string/value-validation";
import Name from "../../../string/name";
// export default PropertyValue;
// namespace PropertyValue {
//
//     export const Parameter = PropertyValueParameter;
//     export const Object = PropertyValueObject;
//     export type Argument = PropertyValueArgument;
// }
export default function PropertyValueParameters(property, valid, validation, type) {
    return PropertyValueArgumentValidation.Parameters(property, valid, type, Name(validation));
}
// export type PropertyValueArgument = PropertyInterface & {type : string} & Validatable & Validation<any[]>;
//
// export function PropertyValueObject({
//   valid,
//   validation,
//   property,
//   type
// } : PropertyInterface & {type : string} & Validatable & Validation<any[]>) : string {
//
//     return PropertyValueParameter(
//         property,
//         valid,
//         validation,
//         type,
//     );
// }
//# sourceMappingURL=value-validation-parameters.js.map