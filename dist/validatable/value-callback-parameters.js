var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ValueCallbackParameters_message;
import MemoizeAccessor from "../function/memoize-accessor";
//
// export default ValueCallback;
export default class ValueCallbackParameters {
    // readonly value: ValueType;
    constructor(value, validators, map, validation, message) {
        this.value = value;
        this.validators = validators;
        this.map = map;
        this.validation = validation;
        _ValueCallbackParameters_message.set(this, void 0);
        this.value = value;
        __classPrivateFieldSet(this, _ValueCallbackParameters_message, message, "f");
        this.validatables = map(value, validators);
        this.validatable = validation(this.validatables);
    }
    get valid() {
        return this.validatable.valid;
    }
    get messages() {
        return this.validatables;
    }
    get message() {
        try {
            return __classPrivateFieldGet(this, _ValueCallbackParameters_message, "f").call(this, this.validatables);
        }
        catch (e) {
            throw new Error(`error on generating message, ${e}`);
        }
    }
}
_ValueCallbackParameters_message = new WeakMap();
__decorate([
    MemoizeAccessor(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], ValueCallbackParameters.prototype, "message", null);
// export type ValueCallbackArgument<
//     ValueType = unknown,
//     MessageType = unknown,
//     RecordType extends Record<PropertyKey, Validator<ValueType>> = Record<PropertyKey, Validator<ValueType>>,
//     Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>,
//     ValidatableType extends Validatable = Validatable
// > =
//     BaseValue<ValueType> &
//     Validators<RecordType> &
//     //{map : (value:ValueType, validator:RecordType)=>Result} &
//     {map : (argument:BaseValue<ValueType> & Validators<RecordType>)=>Result} &
//     // TODO CHANGE TO VALIDATOR
//     {validation: (result:Result)=>ValidatableType} &
//     Message<(result:Result)=>MessageType>
//
// export class ValueCallbackObject<
//     ValueType = unknown,
//     MessageType = unknown,
//     RecordType extends Record<PropertyKey, Validator<ValueType>> = Record<PropertyKey, Validator<ValueType>>,
//     Result extends Partial<Record<PropertyKey, ValidatorValidatable>> = Partial<Record<PropertyKey, ValidatorValidatable>>,
//     ValidatableType extends Validatable = Validatable
// > extends ValueCallbackParameter<ValueType, MessageType, RecordType, Result, ValidatableType> {
//
//     constructor({
//             message,
//             value,
//             validators,
//             map,
//             validation
//         } : ValueCallbackArgument<ValueType, MessageType, RecordType, Result, ValidatableType>
//     ) {
//         super(value, validators, (value, validators)=>map({value, validators}), validation, message);
//     }
//
// }
//
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
//# sourceMappingURL=value-callback-parameters.js.map