import EmptyType from "../string/empty";
export default Empty;
var Empty;
(function (Empty) {
    Empty.Parameter = EmptyParameter;
    Empty.Object = EmptyObject;
})(Empty || (Empty = {}));
export function EmptyParameter(value, subject = 'object') {
    return new Error(EmptyType.Parameter(value, false, subject));
}
export function EmptyObject(
// value : object,
// subject : string = 'object',
{ value, subject = 'object', }) {
    return EmptyParameter(value, subject);
}
//# sourceMappingURL=empty.js.map