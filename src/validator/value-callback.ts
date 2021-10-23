import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableValueCallback, {Argument as ValidatableValueCallbackArgument} from "../validatable/value-callback";
import ValidatableValue from "../validatable/value";
import Return from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Replace from "@dikac/t-validatable/boolean/replace";
import Value from "./value";
import ValidatorValidatable from "@dikac/t-validator/validatable/validatable";
import BaseValue from "@dikac/t-value/value";
import ValidatorsContainer from "./validators/validators";
import Message from "@dikac/t-message/message";
import ValidatorContainer from "@dikac/t-validator/validator/validator";

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
// export default class ValueCallback<
//     BaseType = unknown,
//     ValueType extends BaseType = BaseType,
//     MessageType = unknown,
//     ValidatorsType extends Record<PropertyKey, Validator<BaseType, ValueType>> = Record<PropertyKey, Validator<BaseType, ValueType>>,
//     Validatables extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
//     ValidatableType extends Validatable = Validatable
// > implements Value<BaseType, ValueType, MessageType, ValidatorsType, Validatables, ValidatableType> {
//     /**
//      * @param validators
//      * record of {@link Validator}
//      *
//      * @param map
//      * process value and {@param validators} to list of {@link Instance}
//      *
//      * @param validation
//      * process result of {@param map} to single {@link Validatable}
//      *
//      * @param message
//      * process result of {@param map} to single {@link Message}
//      */
//     constructor(
//         public validators : ValidatorsType,
//         public map : (base : BaseType, record : ValidatorsType) => Validatables,
//         public validation : (result : Validatables)=>ValidatableType,
//         public message : (result : Validatables)=>MessageType
//     ) {
//     }
//
//     validate<Argument extends ValueType>(argument: Argument)
//         : Replace<ValidatableValue<Argument, MessageType, ValidatorsType, Validatables, ValidatableType>, true>;
//     validate<Argument extends BaseType>(argument: Argument)
//         : Return<BaseType, Argument, ValueType, ValidatableValue<Argument, MessageType, ValidatorsType, Validatables, ValidatableType>>
//
//     validate<Argument extends BaseType>(argument: Argument)    {
//         return <Replace<ValidatableValue<BaseType, MessageType, ValidatorsType, Validatables, ValidatableType>, true> |
//             Return<BaseType, Argument, ValueType, ValidatableValue<Argument, MessageType, ValidatorsType, Validatables, ValidatableType>>>
//             new ValidatableValueCallback(argument, this.validators, this.map, this.validation, this.message);
//     }
// }

export type Argument<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    MessageType = unknown,
    ValidatorsType extends Record<PropertyKey, Validator<BaseType, ValueType>> = Record<PropertyKey, Validator<BaseType, ValueType>>,
    Validatables extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable = Validatable
> =
    ValidatorsContainer<ValidatorsType> &
    //{ map : (base : BaseType, record : ValidatorsType) => Validatables} &
    { map : (argument : BaseValue<BaseType> & ValidatorsContainer<ValidatorsType>) => Validatables} &
    // TODO CHANGE TO VALIDATOR
    {validation: (result : Validatables)=>ValidatableType} &
    Message<(result : Validatables)=>MessageType>
    ;


export default function ValueCallback<
    BaseType = unknown,
    ValueType extends BaseType = BaseType,
    MessageType = unknown,
    ValidatorsType extends Record<PropertyKey, Validator<BaseType, ValueType>> = Record<PropertyKey, Validator<BaseType, ValueType>>,
    Validatables extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable = Validatable
>(
    {
        validators,
        map,
        validation,
        message,
    } : Argument<BaseType, ValueType, MessageType, ValidatorsType, Validatables, ValidatableType>
) : Value<BaseType, ValueType, MessageType, ValidatorsType, Validatables, ValidatableType> {

    return function <Argument extends BaseType, ValueType extends BaseType>(value: Argument|ValueType) {

        return new ValidatableValueCallback({value, validators, map, validation, message});

    } as Value<BaseType, ValueType, MessageType, ValidatorsType, Validatables, ValidatableType>
}
