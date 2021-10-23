import IteratorMap from "../iterator/map";
export default function Map(
//values : RecordParameter<Validators>,
//validators : Validators,
{ value, validators }) {
    let object = {};
    for (let [property, validatable] of IteratorMap({ value, validators })) {
        object[property] = validatable;
    }
    return object;
}
//# sourceMappingURL=map.js.map