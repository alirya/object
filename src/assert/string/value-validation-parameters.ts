import Value from "./value-parameters";

export default function ValueValidationParameters(
    property : PropertyKey,
    valid : boolean,
    type : string,
    validation : string,
) : string {

    let message = Value(property, valid, type);

    return `${message}, against "${validation}"`;
}
