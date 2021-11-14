import MapPartialParameters from "./map-partial-parameters";
export default function MapPartialParameter(
// validators : Validators,
// validation : (result:Partial<ReturnInfer<Validators>>)=>ValidatableType,
// message : (result:Partial<ReturnInfer<Validators>>)=>MessageType,
{ validators, validation, message }) {
    return MapPartialParameters(validators, validation, message);
}
//# sourceMappingURL=map-partial-parameter.js.map