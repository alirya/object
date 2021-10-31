/**
 * check if {@param object} is certain type of record
 * {@param value} use to validate object value
 */
export default Record;
var Record;
(function (Record) {
    Record.Parameter = RecordParameter;
    Record.Object = RecordObject;
})(Record || (Record = {}));
export function RecordParameter(object, value, property) {
    for (const [prop, val] of Object.entries(object)) {
        if (property) {
            if (!property(prop)) {
                return false;
            }
        }
        if (!value(val)) {
            return false;
        }
    }
    return true;
}
export function RecordObject(object, 
//value : (value:unknown)=> value is ValueType,
//property ?: (value:PropertyKey)=> value is KeyType,
{ value, property }) {
    for (const [prop, val] of Object.entries(object)) {
        if (property) {
            if (!property(prop)) {
                return false;
            }
        }
        if (!value(val)) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=record.js.map