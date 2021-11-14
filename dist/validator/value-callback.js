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
var ValueCallback;
(function (ValueCallback) {
    ValueCallback.Parameters = ValueCallbackParameters;
    ValueCallback.Parameter = ValueCallbackParameter;
})(ValueCallback || (ValueCallback = {}));
export default ValueCallback;
//
// export type ValueCallbackArgument<
//     BaseType = unknown,
//     ValueType extends BaseType = BaseType,
//     MessageType = unknown,
//     ValidatorsType extends Record<PropertyKey, Validator<BaseType, ValueType>> = Record<PropertyKey, Validator<BaseType, ValueType>>,
//     Validatables extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
//     ValidatableType extends Validatable = Validatable
// > =
//     ValidatorsContainer<ValidatorsType> &
//     //{ map : (base : BaseType, record : ValidatorsType) => Validatables} &
//     { map : (argument : BaseValue<BaseType> & ValidatorsContainer<ValidatorsType>) => Validatables} &
//     // TODO CHANGE TO VALIDATOR
//     {validation: (result : Validatables)=>ValidatableType} &
//     Message<(result : Validatables)=>MessageType>
//     ;
//
//
// export function ValueCallbackParameter<
//     BaseType = unknown,
//     ValueType extends BaseType = BaseType,
//     MessageType = unknown,
//     ValidatorsType extends Record<PropertyKey, Validator<BaseType, ValueType>> = Record<PropertyKey, Validator<BaseType, ValueType>>,
//     Validatables extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
//     ValidatableType extends Validatable = Validatable
// >(
//     validators : ValidatorsType,
//     map : (base : BaseType, record : ValidatorsType) => Validatables,
//     validation : (result : Validatables)=>ValidatableType,
//     message : (result : Validatables)=>MessageType
// ) : Value<BaseType, ValueType, MessageType, ValidatorsType, Validatables, ValidatableType> {
//
//     return function <Argument extends BaseType, ValueType extends BaseType>(value: Argument|ValueType) {
//
//         return new ValidatableValueCallback.Parameter(value, validators, map, validation, message);
//
//     } as Value<BaseType, ValueType, MessageType, ValidatorsType, Validatables, ValidatableType>
// }
//
// export function ValueCallbackObject<
//     BaseType = unknown,
//     ValueType extends BaseType = BaseType,
//     MessageType = unknown,
//     ValidatorsType extends Record<PropertyKey, Validator<BaseType, ValueType>> = Record<PropertyKey, Validator<BaseType, ValueType>>,
//     Validatables extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
//     ValidatableType extends Validatable = Validatable
// >(
//     {
//         validators,
//         map,
//         validation,
//         message,
//     } : ValueCallbackArgument<BaseType, ValueType, MessageType, ValidatorsType, Validatables, ValidatableType>
// ) : Value<BaseType, ValueType, MessageType, ValidatorsType, Validatables, ValidatableType> {
//
//     return ValueCallbackParameter(
//         validators,
//         (value, validators) => map({value, validators}),
//         validation, message
//     );
// }
//# sourceMappingURL=value-callback.js.map