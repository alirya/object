import MapCallbackParameters from "./map-callback-parameters";
export default function MapCallbackParameter(
// validators : Validators,
// map : (record:RecordParameter<Validators>, validators : Validators)=>Result,
// validation : (result:Result)=>ValidatableType,
// message : (result:Result)=>MessageType,
{ validators, map, validation, message }) {
    return MapCallbackParameters(validators, map, validation, message);
}
//# sourceMappingURL=map-callback-parameter.js.map