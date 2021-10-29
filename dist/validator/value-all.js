import ValidateValue from "./validatable/record/value";
import ValueCallback from "./value-callback";
export default ValueAll;
var ValueAll;
(function (ValueAll) {
    ValueAll.Parameter = ValueAllParameter;
    ValueAll.Object = ValueAllObject;
})(ValueAll || (ValueAll = {}));
/**
 * more specific implementation of {@link ValueCallback}
 *
 * Validate value with all record of {@link Validator}
 *
 * @param validators
 * record of {@link Validator} to be used against {@template BaseType} or {@template ValueType}
 *
 * @param validation
 *
 * @param message
 *
 * @template BaseType
 * Base value type for all {@link Validator}
 *
 * @template ValueType
 * value type {@link Validator}
 *
 * @template MessageType
 * message type {@link Validator}
 *
 * @template Validators
 * type of {@param validators}
 *
 * @template ValidatableType
 * result after processing {@template Validators} with {@template BaseType} or {@template ValueType}
 */
export function ValueAllParameter(validators, validation, message) {
    return ValueCallback.Parameter(validators, ValidateValue.Parameter, validation, message);
}
export function ValueAllObject(
// validators : Validators,
// validation : (result:MapReturn<Validators>) => ValidatableType,
// message : (result:MapReturn<Validators>) => MessageType,
{ validators, validation, message, }) {
    return ValueAllParameter(validators, validation, message);
}
//# sourceMappingURL=value-all.js.map