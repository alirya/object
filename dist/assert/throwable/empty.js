import EmptyType from "../string/empty";
export default function Empty(
// value : object,
// subject : string = 'object',
{ value, subject = 'object', }) {
    return new Error(EmptyType({ valid: false, value, subject }));
}
//# sourceMappingURL=empty.js.map