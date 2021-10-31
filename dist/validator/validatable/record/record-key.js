import IteratorRecordKey from "../iterator/record-key";
export default RecordKey;
var RecordKey;
(function (RecordKey) {
    RecordKey.Parameter = RecordKeyParameter;
    RecordKey.Object = RecordKeyObject;
})(RecordKey || (RecordKey = {}));
export function RecordKeyParameter(value, validator) {
    let result = {};
    for (const [key, validatable] of IteratorRecordKey.Parameter(value, validator)) {
        result[key] = validatable;
    }
    return result;
}
export function RecordKeyObject({ value, validator }) {
    return RecordKeyParameter(value, validator);
}
//# sourceMappingURL=record-key.js.map