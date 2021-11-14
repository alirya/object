import StringType from "../string/object";
export default function ObjectParameters(value, subject = 'type', conversion = value => typeof value) {
    return new Error(StringType.Parameters(value, false, subject, conversion));
}
//# sourceMappingURL=object-parameters.js.map