import ObjectParameters from "./object-parameters";
export default function ObjectParameter(
// string : unknown,
// subject : string = 'type',
// conversion : (value:unknown)=>string = value=>typeof value,
{ value, subject = 'type', conversion = value => typeof value, }) {
    return ObjectParameters(value, subject, conversion);
}
//# sourceMappingURL=object-parameter.js.map