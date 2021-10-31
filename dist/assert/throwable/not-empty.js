import NotEmptyType from "../string/not-Empty";
export default NotEmpty;
var NotEmpty;
(function (NotEmpty) {
    NotEmpty.Parameter = NotEmptyParameter;
    NotEmpty.Object = NotEmptyObject;
})(NotEmpty || (NotEmpty = {}));
export function NotEmptyParameter(
// string : object,
// subject : string = 'object',
//{
value, subject = 'object') {
    return new Error(NotEmptyType.Parameter(value, false, subject));
}
export function NotEmptyObject(
// string : object,
// subject : string = 'object',
{ value, subject = 'object', }) {
    return NotEmptyParameter(value, subject);
}
//# sourceMappingURL=not-empty.js.map