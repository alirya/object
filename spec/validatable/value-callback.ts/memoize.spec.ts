//
// it("force console log", () => { spyOn(console, 'log').and.callThrough();});
//
// type Messages = {
//     name : string,
//     address : string,
//     user : string,
// }
//
// class Countable<TypeName extends TypeString> extends Type<TypeName, string>  {
//
//     public called : number = 0;
//
//     constructor(type : TypeName) {
//         super(type, TypeMessage);
//     }
//
//     validate  (value) {
//
//         this.called++;
//
//         return super(value);
//     }
// }
//
//
// let andCount = 0;
// const and = function <Object extends Partial<Record<PropertyKey, Validatable>>>(record : Object) {
//
//     andCount++;
//     return And(record);
// }
//
// let validator = {
//     name : new Countable('string'),
// };
//
//
// let validateValueCount = 0;
// const validateValue = function<ValueType, Validators extends Record<PropertyKey, Validator<ValueType>>>(value : ValueType, validators : Validators) {
//     validateValueCount++;
//     return ValidateValue(value, validators);
// }
//
// let messageMapCount = 0;
// const messageMap = function(validators) {
//     messageMapCount++;
//     return MessageMap(validators);
// }
//
// let value = 'data';
//
// const instance = new ValueCallback(value, validator, validateValue, and, messageMap);
//
//
// for(let i = 0; i <= 5; i++) {
//
//     it('check call', () =>{
//
//         expect(typeof instance.validatables.name.valid).toBe("boolean");
//         expect(typeof instance.validatable.valid).toBe("boolean");
//         expect(typeof instance.valid).toBe("boolean");
//         expect(typeof instance.message.name).toBe("string");
//         expect(typeof instance.messages.name.message).toBe("string");
//         expect(typeof instance.validation).toBe("function");
//         expect(instance.validators.name).toBeInstanceOf(Countable);
//
//         expect(messageMapCount).toBe(1);
//         expect(validateValueCount).toBe(1);
//         expect(andCount).toBe(1);
//         expect(validator.name.called).toBe(1);
//     })
// }
// for(let i = 2; i <= 7; i++) {
//
//     it('check call', () =>{
//
//         let value = 'data' + i;
//         const instance = new ValueCallback(value, validator, validateValue, and, messageMap);
//
//         expect(instance.value).toBe("data" + i);
//         expect(typeof instance.validatables.name.valid).toBe("boolean");
//         expect(typeof instance.validatable.valid).toBe("boolean");
//         expect(typeof instance.valid).toBe("boolean");
//         expect(typeof instance.message.name).toBe("string");
//         expect(typeof instance.messages.name.message).toBe("string");
//         expect(typeof instance.validation).toBe("function");
//         expect(instance.validators.name).toBeInstanceOf(Countable);
//
//         expect(messageMapCount).toBe(i);
//         expect(validateValueCount).toBe(i);
//         expect(andCount).toBe(i);
//         expect(validator.name.called).toBe(i);
//     })
// }
