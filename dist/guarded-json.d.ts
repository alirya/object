/**
 * Parse json string to object and check for certain type according to {@param validator}
 * @param json
 * @param validator
 * @param error
 * @param preprocess
 * @constructor
 */
import GuardedJsonParameters from "./guarded-json-parameters";
import GuardedJsonParameter from "./guarded-json-parameter";
declare namespace GuardedJson {
    const Parameters: typeof GuardedJsonParameters;
    const Parameter: typeof GuardedJsonParameter;
}
export default GuardedJson;
