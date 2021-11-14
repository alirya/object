import ValidateMap from "./validatable/record/map";
import MapCallback from "./map-callback";
// export default MapAll;
// namespace MapAll {
//
//     export const Parameter = MapAllParameter;
//     export const Object = MapAllObject;
//     export type Argument<
//         Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
//         ValidatableType extends Validatable = Validatable,
//         MessageType = unknown
//     > = MapAllArgument<
//         Validators,
//         ValidatableType,
//         MessageType
//     >;
// }
// export type MapAllArgument<
//     Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
//     ValidatableType extends Validatable = Validatable,
//     MessageType = unknown
// > =
//     ValidatorsContainer<Validators> &
//     Message<(result:ReturnInfer<Validators>)=>MessageType> &
//     // TODO MOVE TO STANDARD VALIDATOR
//     {validation : (result:ReturnInfer<Validators>)=>ValidatableType};
export default function MapAllParameters(validators, validation, message) {
    return MapCallback.Parameters(validators, (value) => ValidateMap.Parameters(value, validators), validation, message);
}
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
//# sourceMappingURL=map-all-parameters.js.map