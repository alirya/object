import PropertyValueParameter from "./value-validation-parameter";
import PropertyValueParameters from "./value-validation-parameters";
var PropertyValue;
(function (PropertyValue) {
    PropertyValue.Parameter = PropertyValueParameter;
    PropertyValue.Parameters = PropertyValueParameters;
})(PropertyValue || (PropertyValue = {}));
export default PropertyValue;
//
// export function PropertyValueParameter(
//   property : PropertyKey,
//   valid : boolean,
//   validation : (...arg: any[]) => boolean,
//   type : string
// ) : string {
//
//     return PropertyValueArgumentValidation.Parameter(
//         property,
//         valid,
//         type,
//         Name(validation)
//     );
// }
//
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
//# sourceMappingURL=value-validation.js.map