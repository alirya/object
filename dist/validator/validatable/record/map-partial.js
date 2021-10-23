import IteratorMap from "../iterator/map";
export default function MapPartial(
// values : RecordParameter<Validators>,
// validators : Validators,
{ value, validators, stop = false, }) {
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
//# sourceMappingURL=map-partial.js.map