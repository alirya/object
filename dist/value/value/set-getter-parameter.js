import SetGetterParameters from "./set-getter-parameters";
export default function SetGetterParameter(
// object : This,
// property : keyof This,
// value : Type,
// configurable : boolean = true,
{ object, property, value, configurable = true, }) {
    return SetGetterParameters(object, property, value, configurable);
}
//# sourceMappingURL=set-getter-parameter.js.map