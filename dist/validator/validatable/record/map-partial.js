import IteratorMap from "../iterator/map";
export default MapPartial;
var MapPartial;
(function (MapPartial) {
    MapPartial.Parameter = MapPartialParameter;
    MapPartial.Object = MapPartialObject;
})(MapPartial || (MapPartial = {}));
export function MapPartialParameter(value, validators, stop = false) {
    let object = {};
    for (let [property, validatable] of IteratorMap({ value, validators })) {
        object[property] = validatable;
        if (validatable.valid === stop) {
            return object;
        }
    }
    return object;
    // for(let property in validators) {
    //
    //     const validator = validators[property];
    //     const value = values[property];
    //
    //     object[<PropertyKey>property] = validator(value);
    //
    //     if(!object[<PropertyKey>property].valid) {
    //
    //         return object;
    //     }
    // }
    //
    // return <InferReturn<Validators>> object;
}
export function MapPartialObject(
// values : RecordParameter<Validators>,
// validators : Validators,
{ value, validators, stop = false, }) {
    return MapPartialParameter(value, validators, stop);
}
//# sourceMappingURL=map-partial.js.map