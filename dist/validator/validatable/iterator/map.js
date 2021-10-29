export default Map;
var Map;
(function (Map) {
    Map.Parameter = MapParameter;
    Map.Object = MapObject;
})(Map || (Map = {}));
export function* MapParameter(value, validators) {
    for (let property in validators) {
        const validator = validators[property];
        const val = value[property];
        yield [property, validator(val)];
    }
}
export function* MapObject(
//values : RecordParameter<Validators>,
//validators : Validators,
{ value, validators }) {
    return MapParameter(value, validators);
}
//# sourceMappingURL=map.js.map