import ValidatableValueCallback from "../validatable/value-callback";
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
export default function ValueCallbackParameters(validators, map, validation, message) {
    return function (value) {
        return new ValidatableValueCallback.Parameters(value, validators, map, validation, message);
    };
}
//# sourceMappingURL=value-callback-parameters.js.map