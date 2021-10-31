import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import EmptyValidatable from "../validatable/empty";
export declare function EmptyParameter(): Validator<object, object, boolean, boolean, EmptyValidatable.Type<object, string>>;
export declare function EmptyParameter<MessageType>(message: (value: object, valid: boolean) => MessageType): Validator<object, object, boolean, boolean, EmptyValidatable.Type<object, MessageType>>;
export declare function EmptyObject(): Validator<object, object, boolean, boolean, EmptyValidatable.Type<object, string>>;
export declare function EmptyObject<MessageType>(message: (result: Readonly<Value<object> & Validatable>) => MessageType): Validator<object, object, boolean, boolean, EmptyValidatable.Type<object, MessageType>>;
