import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableValue from "../validatable/value";
import Dynamic from "@dikac/t-validator/validatable/dynamic";

/**
 * extended {@link Validator} for validating value with record of {@link Validator}
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

type Value<
    Base,
    Value extends Base,
    MessageType,
    RecordType extends Record<PropertyKey, Validator<Base, Value>>,
    Result extends Partial<Record<PropertyKey, Dynamic>>,
    ValidatableType extends Validatable
> = Validator<
    Base,
    Value,
    boolean, true,
    ValidatableValue<Base, MessageType, RecordType, Result, ValidatableType>
>;

export default Value;
