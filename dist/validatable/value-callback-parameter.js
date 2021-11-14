import ValueCallbackParameters from "./value-callback-parameters";
export default class ValueCallbackParameter extends ValueCallbackParameters {
    constructor({ message, value, validators, map, validation }) {
        super(value, validators, (value, validators) => map({ value, validators }), validation, message);
    }
}
//
// namespace ValueCallback {
//
//     export const Parameter = ValueCallbackParameter;
//     export const Object = ValueCallbackObject;
//     export type Argument<
//         ValueType = unknown,
//         MessageType = unknown,
//         RecordType extends Record<PropertyKey, Validator<ValueType>> = Record<PropertyKey, Validator<ValueType>>,
//         Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>,
//         ValidatableType extends Validatable = Validatable
//     > = ValueCallbackArgument<
//         ValueType,
//         MessageType,
//         RecordType,
//         Result,
//         ValidatableType
//     >;
// }
//# sourceMappingURL=value-callback-parameter.js.map