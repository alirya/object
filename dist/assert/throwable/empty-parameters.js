import EmptyType from "../string/empty";
export default function EmptyParameters(value, subject = 'object') {
    return new Error(EmptyType.Parameters(value, false, subject));
}
//# sourceMappingURL=empty-parameters.js.map