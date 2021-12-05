import Value from "./value";

export default function ValueValidationParameters(
    property : PropertyKey,
    valid : boolean,
    type : string,
    validation : string,
) : string {

    let message = Value.Parameters(property, valid, type);

    return `${message}, against "${validation}"`;
}
