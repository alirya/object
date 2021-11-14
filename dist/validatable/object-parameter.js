import ObjectParameters from "./object-parameters";
export default function ObjectParameter(
// value : Argument,
// message : (result:Readonly<Value<Argument> & Validatable>)=>MessageType,
{ value, message }) {
    return ObjectParameters(value, (value, valid) => message({ value, valid }));
}
//# sourceMappingURL=object-parameter.js.map