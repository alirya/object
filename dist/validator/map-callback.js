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
export default MapCallback;
var MapCallback;
(function (MapCallback) {
    MapCallback.Parameter = MapCallbackParameter;
    MapCallback.Object = MapCallbackObject;
})(MapCallback || (MapCallback = {}));
export function MapCallbackParameter(validators, map, validation, message) {
    return function (value) {
        return new ValidatableMapCallback.Parameter(value, validators, map, validation, message);
    };
}
export function MapCallbackObject(
// validators : Validators,
// map : (record:RecordParameter<Validators>, validators : Validators)=>Result,
// validation : (result:Result)=>ValidatableType,
// message : (result:Result)=>MessageType,
{ validators, map, validation, message }) {
    return MapCallbackParameter(validators, map, validation, message);
}
//# sourceMappingURL=map-callback.js.map