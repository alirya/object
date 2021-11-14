import NotEmptyType from "../string/not-Empty";
export default function NotEmptyParameters(
// string : object,
// subject : string = 'object',
//{
value, subject = 'object') {
    return new Error(NotEmptyType.Parameters(value, false, subject));
}
//# sourceMappingURL=not-empty-parameters.js.map