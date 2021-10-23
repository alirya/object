import PropertyValueArgumentValidation from "../../../assert/string/value-validation";
import Name from "../../../string/name";
export default function PropertyValue({ property, type, validation }) {
    let message = PropertyValueArgumentValidation({
        valid: false,
        property,
        type,
        validation: Name(validation)
    });
    return new Error(message);
}
//# sourceMappingURL=value-validation.js.map