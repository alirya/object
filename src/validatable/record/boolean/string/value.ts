import ValueMessage from "../../../../assert/string/value-parameters";

export default function Value(valid: boolean, property: PropertyKey) {

    return ValueMessage(property, valid, 'Validator or record of Validator')
}
