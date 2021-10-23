export default function* Map(
//values : RecordParameter<Validators>,
//validators : Validators,
{ value, validators }) {
    for (let property in validators) {
        const validator = validators[property];
        const val = value[property];
        yield [property, validator(val)];
    }
}
//# sourceMappingURL=map.js.map