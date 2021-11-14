import ValidatableMapCallback from "../validatable/map-callback";
//
// export default class MapCallback<
//     Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
//     Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
//     ValidatableType extends Validatable = Validatable,
//     MessageType = unknown,
// > implements Map <Validators, Result, ValidatableType, MessageType> {
//     constructor(
//         public validators : Validators,
//         public map : (record:RecordParameter<Validators>, validators : Validators)=>Result,
//         public validation : (result:Result)=>ValidatableType,
//         public message : (result:Result)=>MessageType
//     ) {
//     }
//
//     validate<Argument extends RecordType<Validators>>(
//         argument: Argument
//     ) : ValidatableReplace<ValidatableMapInterface<MessageType, Validators, Result, ValidatableType, Argument>, true>;
//
//     validate<Argument extends RecordBase<Validators>>(
//         argument: Argument
//     ) : Simple<RecordBase<Validators>, Argument, RecordType<Validators>, ValidatableMapInterface<MessageType, Validators, Result, ValidatableType, RecordBase<Validators>>>;
//
//     validate<Argument extends RecordBase<Validators>>(
//         argument: Argument
//     ) {
//
//         return new ValidatableMapCallback(argument, this.validators, this.map, this.validation, this.message) as
//             ValidatableReplace<ValidatableMapInterface<MessageType, Validators, Result, ValidatableType, Argument>, true>;
//     }
// }
// export default MapCallback;
// namespace MapCallback {
//
//     export const Parameter = MapCallbackParameter;
//     export const Object = MapCallbackObject;
//     export type Argument<
//         Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
//         Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
//         ValidatableType extends Validatable = Validatable,
//         MessageType = unknown,
//     > = MapCallbackArgument<
//         Validators,
//         Result,
//         ValidatableType,
//         MessageType
//     >;
// }
//
// export type MapCallbackArgument<
//     Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
//     Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
//     ValidatableType extends Validatable = Validatable,
//     MessageType = unknown,
// > =
//     ValidatorsContainer<Validators> &
//     Message<(result:Result)=>MessageType> &
//     // TODO MOVE TO STANDARD VALIDATOR
//     {validation : (result:Result)=>ValidatableType} &
//     {map:(record:RecordParameter<Validators>, validators : Validators)=>Result};
export default function MapCallbackParameters(validators, map, validation, message) {
    return function (value) {
        return new ValidatableMapCallback.Parameters(value, validators, map, validation, message);
    };
}
//# sourceMappingURL=map-callback-parameters.js.map