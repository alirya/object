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
var _MapCallbackParameters_value, _MapCallbackParameters_message;
import Pick from "../pick";
import MemoizeAccessor from "../function/memoize-accessor";
export default class MapCallbackParameters {
    // public validators : ValidatorsType;
    // private map : (values : RecordParameter<ValidatorsType>, validators : ValidatorsType)=>Result;
    // private validation : (result : Result)=>ValidatableType;
    constructor(value, validators, map, validation, message) {
        this.validators = validators;
        this.map = map;
        this.validation = validation;
        _MapCallbackParameters_value.set(this, void 0);
        _MapCallbackParameters_message.set(this, void 0);
        this.validators = validators;
        this.map = map;
        this.validation = validation;
        __classPrivateFieldSet(this, _MapCallbackParameters_value, value, "f");
        __classPrivateFieldSet(this, _MapCallbackParameters_message, message, "f");
        this.validatables = this.map(__classPrivateFieldGet(this, _MapCallbackParameters_value, "f"), this.validators);
        this.validatable = this.validation(this.validatables);
    }
    get valid() {
        return this.validatable.valid;
    }
    get messages() {
        return this.validatables;
    }
    get value() {
        return Pick(__classPrivateFieldGet(this, _MapCallbackParameters_value, "f"), ...Object.keys(this.validators));
    }
    get message() {
        try {
            return __classPrivateFieldGet(this, _MapCallbackParameters_message, "f").call(this, this.validatables);
        }
        catch (e) {
            throw new Error(`error on generating message, ${e}`);
        }
    }
}
_MapCallbackParameters_value = new WeakMap(), _MapCallbackParameters_message = new WeakMap();
__decorate([
    MemoizeAccessor(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], MapCallbackParameters.prototype, "value", null);
__decorate([
    MemoizeAccessor(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], MapCallbackParameters.prototype, "message", null);
//# sourceMappingURL=map-callback-parameters.js.map