import RecordParameter, { RecordArgument } from "./record-parameter";
import RecordParameters from "./record-parameters";
/**
 * check if {@param object} is certain type of record
 * {@param value} use to validate object value
 */
declare namespace Record {
    const Parameter: typeof RecordParameter;
    const Parameters: typeof RecordParameters;
    type Argument<ValueType, KeyType extends PropertyKey = PropertyKey> = RecordArgument<ValueType, KeyType>;
}
export default Record;
