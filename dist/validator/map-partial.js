import ValidateMap from "./validatable/record/map-partial";
import MapCallback from "./map-callback";
export default MapPartial;
var MapPartial;
(function (MapPartial) {
    MapPartial.Parameter = MapPartialParameter;
    MapPartial.Object = MapPartialObject;
})(MapPartial || (MapPartial = {}));
export function MapPartialParameter(validators, validation, message) {
    return MapCallback.Parameter(validators, 
    //map :({value, validators})=>ValidateMap({value, validators}),
    ValidateMap.Parameter, validation, message);
}
export function MapPartialObject(
// validators : Validators,
// validation : (result:Partial<ReturnInfer<Validators>>)=>ValidatableType,
// message : (result:Partial<ReturnInfer<Validators>>)=>MessageType,
{ validators, validation, message }) {
    return MapPartialParameter(validators, validation, message);
}
//# sourceMappingURL=map-partial.js.map