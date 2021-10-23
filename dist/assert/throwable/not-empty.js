import NotEmptyType from "../string/not-empty";
export default function NotEmpty(
// string : object,
// subject : string = 'object',
{ value, subject = 'object', }) {
    return new Error(NotEmptyType({ valid: false, value, subject }));
}
//# sourceMappingURL=not-empty.js.map