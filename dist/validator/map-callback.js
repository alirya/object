import ValidatableMapCallback from "../validatable/map-callback";
export default function MapCallback(
// validators : Validators,
// map : (record:RecordParameter<Validators>, validators : Validators)=>Result,
// validation : (result:Result)=>ValidatableType,
// message : (result:Result)=>MessageType,
{ validators, map, validation, message }) {
    return function (value) {
        return new ValidatableMapCallback({ value, validators, map, validation, message });
    };
}
//# sourceMappingURL=map-callback.js.map