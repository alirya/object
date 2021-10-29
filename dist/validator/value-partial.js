import ValidateValuePartial from "./validatable/record/value-partial";
import ValueCallback from "./value-callback";
export default ValuePartial;
var ValuePartial;
(function (ValuePartial) {
    ValuePartial.Parameter = ValuePartialParameter;
    ValuePartial.Object = ValuePartialObject;
})(ValuePartial || (ValuePartial = {}));
export function ValuePartialParameter(validators, validation, message, stop = false) {
    return ValueCallback.Parameter(validators, (value, validators) => ValidateValuePartial.Parameter(value, validators, stop), validation, message);
}
export function ValuePartialObject(
// validators : Validators,
// validation : (result:Partial<ReturnInfer<Validators>>) => ValidatableType,
// message : (result:Partial<ReturnInfer<Validators>>) => MessageType,
// stop : boolean = false,
{ validators, validation, message, stop = false, }) {
    return ValuePartialParameter(validators, validation, message, stop);
}
//# sourceMappingURL=value-partial.js.map