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

namespace GuardedJson {

    export const Parameters = GuardedJsonParameters;
    export const Parameter = GuardedJsonParameter;
}

export default GuardedJson;
