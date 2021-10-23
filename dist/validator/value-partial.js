import ValidateValuePartial from "./validatable/record/value-partial";
import ValueCallback from "./value-callback";
export default function ValuePartial(
// validators : Validators,
// validation : (result:Partial<ReturnInfer<Validators>>) => ValidatableType,
// message : (result:Partial<ReturnInfer<Validators>>) => MessageType,
// stop : boolean = false,
{ validators, validation, message, stop = false, }) {
    return ValueCallback({
        validators,
        map: ({ value, validators }) => ValidateValuePartial({ value, validators, stop }),
        validation,
        message
    });
}
//# sourceMappingURL=value-partial.js.map