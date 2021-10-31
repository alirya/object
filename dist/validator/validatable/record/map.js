import IteratorMap from "../iterator/map";
export default Map;
var Map;
(function (Map) {
    Map.Parameter = MapParameter;
    Map.Object = MapObject;
})(Map || (Map = {}));
export function MapParameter(value, validators) {
    let object = {};
    for (let [property, validatable] of IteratorMap.Parameter(value, validators)) {
        object[property] = validatable;
    }
    return object;
}
export function MapObject(
//values : RecordParameter<Validators>,
//validators : Validators,
{ value, validators }) {
    return MapParameter(value, validators);
}
//# sourceMappingURL=map.js.map