import ValueCallbackParameters from "./value-callback-parameters";
import ValueCallbackParameter from "./value-callback-parameter";
/**
 * Base implementation of {@link Value}
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
 * @template ValidatorsType
 * record of {@link Validator} to be used against {@template BaseType} or {@template ValueType}
 *
 * @template Validatables
 * result after processing {@template ValidatorsType} with {@template BaseType} or {@template ValueType}
 *
 * @template ValidatableType
 * final result after processing {@template Validatables}
 */
var ValueCallback;
(function (ValueCallback) {
    ValueCallback.Parameters = ValueCallbackParameters;
    ValueCallback.Parameter = ValueCallbackParameter;
})(ValueCallback || (ValueCallback = {}));
export default ValueCallback;
//# sourceMappingURL=value-callback.js.map