import ValueMessage from '../../../../assert/string/value.js';

export default function Value(valid: boolean, property: PropertyKey) {

    return ValueMessage.Parameters(property, valid, 'Validator or record of Validator');
}
