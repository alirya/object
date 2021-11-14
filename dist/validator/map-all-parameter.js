import MapAllParameters from "./map-all-parameters";
//
// export function MapAllParameter<
//     Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
//     ValidatableType extends Validatable = Validatable,
//     MessageType = unknown
// >(
//     validators : Validators,
//     validation : (result:ReturnInfer<Validators>)=>ValidatableType,
//     message : (result:ReturnInfer<Validators>)=>MessageType,
// ) : Map<Validators, ReturnInfer<Validators>, ValidatableType, MessageType> {
//
//     return <Map<Validators, ReturnInfer<Validators>, ValidatableType, MessageType>> MapCallback.Parameter(
//         validators,
//          (value)=>ValidateMap.Parameter(value, validators),
//         validation,
//         message
//     );
// }
export default function MapAllParameter(
// validators : Validators,
// validation : (result:ReturnInfer<Validators>)=>ValidatableType,
// message : (result:ReturnInfer<Validators>)=>MessageType,
{ validators, validation, message, }) {
    return MapAllParameters(validators, validation, message);
}
//# sourceMappingURL=map-all-parameter.js.map