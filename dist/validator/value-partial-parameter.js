import ValuePartialParameters from "./value-partial-parameters";
export default function ValuePartialParameter(
// validators : Validators,
// validation : (result:Partial<ReturnInfer<Validators>>) => ValidatableType,
// message : (result:Partial<ReturnInfer<Validators>>) => MessageType,
// stop : boolean = false,
{ validators, validation, message, stop = false, }) {
    return ValuePartialParameters(validators, validation, message, stop);
}
//# sourceMappingURL=value-partial-parameter.js.map