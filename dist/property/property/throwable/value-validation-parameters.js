import PropertyValueArgumentValidation from "../../../assert/string/value-validation";
import Name from "../../../string/name";
export default function PropertyValueParameters(property, type, validation) {
    let message = PropertyValueArgumentValidation.Parameters(property, false, type, Name(validation));
    return new Error(message);
}
//# sourceMappingURL=value-validation-parameters.js.map