export default function Record(object, 
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