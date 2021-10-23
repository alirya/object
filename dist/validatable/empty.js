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
var _Empty_message;
import EmptyArgument from "../boolean/empty";
import MemoizeAccessor from "../function/memoize-accessor";
export default class Empty {
    constructor(
    //readonly value : Type,
    //private _message : (result:Readonly<Value<Type> & Validatable>)=>MessageType,
    { value, message }) {
        _Empty_message.set(this, void 0);
        this.value = value;
        __classPrivateFieldSet(this, _Empty_message, message, "f");
        this.valid = EmptyArgument(value);
    }
    get message() {
        return __classPrivateFieldGet(this, _Empty_message, "f").call(this, this);
    }
}
_Empty_message = new WeakMap();
__decorate([
    MemoizeAccessor(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Empty.prototype, "message", null);
//# sourceMappingURL=empty.js.map