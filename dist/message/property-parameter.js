import PropertyParameters from "./property-parameters";
export default function PropertyParameter(
// message : Message<MessageValue>,
// property : PropertyKey,
// delimiter : string = ' : ',
// conversion : (message:MessageValue)=>string = (value: MessageValue) => value + '',
{ message, property, separator, conversion, }) {
    return PropertyParameters({ message }, property, separator, conversion);
}
//# sourceMappingURL=property-parameter.js.map