import PropertyValueArgumentValidation from "../../../assert/string/value-validation";
import Name from "../../../string/name";
export default function PropertyValue({ valid, validation, property, type }) {
    return PropertyValueArgumentValidation({
        valid,
        property,
        type,
        validation: Name(validation)
    });
}
//# sourceMappingURL=value-validation.js.map