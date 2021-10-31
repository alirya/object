export default Property;
var Property;
(function (Property) {
    Property.Parameter = PropertyParameter;
    Property.Object = PropertyObject;
})(Property || (Property = {}));
export function PropertyParameter(message, property, delimiter = ' : ', conversion = (value) => value + '') {
    let string = property.toString() + delimiter + conversion(message.message);
    return { message: string };
}
export function PropertyObject(
// message : Message<MessageValue>,
// property : PropertyKey,
// delimiter : string = ' : ',
// conversion : (message:MessageValue)=>string = (value: MessageValue) => value + '',
{ message, property, delimiter, conversion, }) {
    return PropertyParameter({ message }, property, delimiter, conversion);
}
//# sourceMappingURL=property.js.map