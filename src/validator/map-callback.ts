import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/dynamic";
import MapCallbackParameter, {MapCallbackArgument} from "./map-callback-parameter";
import MapCallbackParameters from "./map-callback-parameters";
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
namespace MapCallback {

    export const Parameter = MapCallbackParameter;
    export const Parameters = MapCallbackParameters;
    export type Argument<
        Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
        Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
        ValidatableType extends Validatable = Validatable,
        MessageType = unknown,
    > = MapCallbackArgument<
        Validators,
        Result,
        ValidatableType,
        MessageType
    >;
}
export default MapCallback;
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
//
// export function MapCallbackParameter<
//     Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
//     Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
//     ValidatableType extends Validatable = Validatable,
//     MessageType = unknown,
// >(
//     validators : Validators,
//     map : (record:RecordParameter<Validators>, validators : Validators)=>Result,
//     validation : (result:Result)=>ValidatableType,
//     message : (result:Result)=>MessageType,
// ) : Map<Validators, Result, ValidatableType, MessageType> {
//
//     return function (value ) {
//
//         return new ValidatableMapCallback.Parameter(value, validators, map, validation, message);
//
//     } as Map<Validators, Result, ValidatableType, MessageType>
//
// }
//
// export function MapCallbackObject<
//     Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
//     Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
//     ValidatableType extends Validatable = Validatable,
//     MessageType = unknown,
// >(
//     // validators : Validators,
//     // map : (record:RecordParameter<Validators>, validators : Validators)=>Result,
//     // validation : (result:Result)=>ValidatableType,
//     // message : (result:Result)=>MessageType,
//     {validators, map, validation, message} : MapCallbackArgument<Validators, Result, ValidatableType, MessageType>
// ) : Map<Validators, Result, ValidatableType, MessageType> {
//
//     return MapCallbackParameter(validators, map, validation, message);
//
// }
//
//

