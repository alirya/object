import ValidateMap from "./validatable/record/map";
export default MapAll;
var MapAll;
(function (MapAll) {
    MapAll.Parameter = MapAllParameter;
    MapAll.Object = MapAllObject;
})(MapAll || (MapAll = {}));
export function MapAllParameter(validators, validation, message) {
    return MapAll({
        validators,
        map: ({ value, validators }) => {
            return ValidateMap({ value, validators });
        },
        validation, message
    });
}
export function MapAllObject(
// validators : Validators,
// validation : (result:ReturnInfer<Validators>)=>ValidatableType,
// message : (result:ReturnInfer<Validators>)=>MessageType,
{ validators, validation, message, }) {
    return MapAllParameter(validators, validation, message);
}
//# sourceMappingURL=map-all.js.map