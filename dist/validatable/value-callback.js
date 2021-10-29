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
var _ValueCallbackParameter_message;
import MemoizeAccessor from "../function/memoize-accessor";
export default ValueCallback;
export class ValueCallbackParameter {
    // readonly value: ValueType;
    constructor(value, validators, map, validation, message) {
        this.value = value;
        this.validators = validators;
        this.map = map;
        this.validation = validation;
        _ValueCallbackParameter_message.set(this, void 0);
        this.value = value;
        __classPrivateFieldSet(this, _ValueCallbackParameter_message, message, "f");
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
            return __classPrivateFieldGet(this, _ValueCallbackParameter_message, "f").call(this, this.validatables);
        }
        catch (e) {
            throw new Error(`error on generating message, ${e}`);
        }
    }
}
_ValueCallbackParameter_message = new WeakMap();
__decorate([
    MemoizeAccessor(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], ValueCallbackParameter.prototype, "message", null);
export class ValueCallbackObject extends ValueCallbackParameter {
    constructor({ message, value, validators, map, validation }) {
        super(value, validators, (value, validators) => map({ value, validators }), validation, message);
    }
}
var ValueCallback;
(function (ValueCallback) {
    ValueCallback.Parameter = ValueCallbackParameter;
    ValueCallback.Object = ValueCallbackObject;
})(ValueCallback || (ValueCallback = {}));
//# sourceMappingURL=value-callback.js.map