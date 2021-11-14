import SetPropertyParameters from "./set-property-parameters";
export default function SetPropertyParameter(
//object : This,
//property : keyof This,
//value : Type,
//writable : boolean = true,
//configurable : boolean = true,
{ object, property, value, writable = true, configurable = true, }) {
    return SetPropertyParameters(object, property, value, writable, configurable);
}
//# sourceMappingURL=set-property-parameter.js.map