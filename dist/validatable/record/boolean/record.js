import TypeRecord from "../../../boolean/record";
import ValidatableType from "@dikac/t-validatable/boolean/validatable";
export default function Record(record, property) {
    return TypeRecord(record, { value: ValidatableType, property: property });
}
//# sourceMappingURL=record.js.map