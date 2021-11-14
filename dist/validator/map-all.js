import MapAllParameters from "./map-all-parameters";
import MapAllParameter from "./map-all-parameter";
var MapAll;
(function (MapAll) {
    MapAll.Parameters = MapAllParameters;
    MapAll.Parameter = MapAllParameter;
})(MapAll || (MapAll = {}));
export default MapAll;
//
// export type MapAllArgument<
//     Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
//     ValidatableType extends Validatable = Validatable,
//     MessageType = unknown
// > =
//     ValidatorsContainer<Validators> &
//     Message<(result:ReturnInfer<Validators>)=>MessageType> &
//     // TODO MOVE TO STANDARD VALIDATOR
//     {validation : (result:ReturnInfer<Validators>)=>ValidatableType};
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
//
// export function MapAllObject<
//     Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
//     ValidatableType extends Validatable = Validatable,
//     MessageType = unknown
// >(
//     // validators : Validators,
//     // validation : (result:ReturnInfer<Validators>)=>ValidatableType,
//     // message : (result:ReturnInfer<Validators>)=>MessageType,
//     {
//         validators,
//         validation,
//         message,
//     } : MapAllArgument<Validators, ValidatableType, MessageType>
// ) : Map<Validators, ReturnInfer<Validators>, ValidatableType, MessageType> {
//
//     return MapAllParameter(validators, validation, message);
// }
//
//# sourceMappingURL=map-all.js.map