import IteratorRecordKey from "../iterator/record-key";
export default RecordKeyPartial;
var RecordKeyPartial;
(function (RecordKeyPartial) {
    RecordKeyPartial.Parameter = RecordKeyPartialParameter;
    RecordKeyPartial.Object = RecordKeyPartialObject;
})(RecordKeyPartial || (RecordKeyPartial = {}));
export function RecordKeyPartialParameter(value, validator, stop = false) {
    let result = {};
    for (const [key, validatable] of IteratorRecordKey({ value, validator })) {
        result[key] = validatable;
        if (validatable.valid === stop) {
            return result;
        }
    }
    return result;
}
export function RecordKeyPartialObject({ value, validator, stop = false, }) {
    return RecordKeyPartialParameter(value, validator, stop);
}
//# sourceMappingURL=record-key-partial.js.map