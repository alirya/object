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
var GuardedJson;
(function (GuardedJson) {
    GuardedJson.Parameters = GuardedJsonParameters;
    GuardedJson.Parameter = GuardedJsonParameter;
})(GuardedJson || (GuardedJson = {}));
export default GuardedJson;
//# sourceMappingURL=guarded-json.js.map