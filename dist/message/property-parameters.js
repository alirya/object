export default function PropertyParameters(message, property, separator = ' : ', conversion = (value) => value + '') {
    let string = property.toString() + separator + conversion(message.message);
    return { message: string };
}
//# sourceMappingURL=property-parameters.js.map