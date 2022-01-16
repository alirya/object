import PropertyValueMessage from '../string/value-parameters';

export default function ValueParameters(
    property : PropertyKey,
    type : string,
) : Error {

    return new Error(PropertyValueMessage(property, false, type));
}

