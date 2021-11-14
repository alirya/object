import SetMethodParameters from "./set-method-parameters";
export default function SetMethodParameter(
//object : This,
//property : keyof This,
//value : Type,
//writable : boolean = true,
//configurable : boolean = true,
{ object, property, value, writable = true, configurable = true, }) {
    return SetMethodParameters(object, property, value, writable, configurable);
}
//# sourceMappingURL=set-method-parameter.js.map