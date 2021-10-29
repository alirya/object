import ValidateMap from "./validatable/record/map-partial";
export default MapPartial;
var MapPartial;
(function (MapPartial) {
    MapPartial.Parameter = MapPartialParameter;
    MapPartial.Object = MapPartialObject;
})(MapPartial || (MapPartial = {}));
export function MapPartialParameter(validators, validation, message) {
    return MapPartial({
        validators,
        map: ({ value, validators }) => ValidateMap({ value, validators }),
        validation,
        message
    });
}
export function MapPartialObject(validators, validation, message) {
    return MapPartial({
        validators,
        map: ({ value, validators }) => ValidateMap({ value, validators }),
        validation,
        message
    });
}
//# sourceMappingURL=map-partial.js.map