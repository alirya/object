import ObjectParameters from "./object-parameters";
export default function ObjectParameter({ valid, value, subject = 'type', conversion = value => typeof value, }) {
    return ObjectParameters(value, valid, subject, conversion);
}
//# sourceMappingURL=object-parameter.js.map