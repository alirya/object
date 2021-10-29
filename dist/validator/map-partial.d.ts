import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "./validatable/record/infer";
import Map from "./map";
import ValidatorsContainer from "./validators/validators";
import Message from "@dikac/t-message/message";
export default MapPartial;
declare namespace MapPartial {
    const Parameter: typeof MapPartialParameter;
    const Object: typeof MapPartialObject;
    type Argument<Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, ValidatableType extends Validatable = Validatable, MessageType = unknown> = MapPartialArgument<Validators, ValidatableType, MessageType>;
}
export declare function MapPartialParameter<Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, ValidatableType extends Validatable = Validatable, MessageType = unknown>(validators: Validators, validation: (result: Partial<ReturnInfer<Validators>>) => ValidatableType, message: (result: Partial<ReturnInfer<Validators>>) => MessageType): Map<Validators, Partial<ReturnInfer<Validators>>, ValidatableType, MessageType>;
export declare type MapPartialArgument<Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, ValidatableType extends Validatable = Validatable, MessageType = unknown> = ValidatorsContainer<Validators> & Message<(result: Partial<ReturnInfer<Validators>>) => MessageType> & {
    validation: (result: Partial<ReturnInfer<Validators>>) => ValidatableType;
};
export declare function MapPartialObject<Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, ValidatableType extends Validatable = Validatable, MessageType = unknown>(validators: Validators, validation: (result: Partial<ReturnInfer<Validators>>) => ValidatableType, message: (result: Partial<ReturnInfer<Validators>>) => MessageType): Map<Validators, Partial<ReturnInfer<Validators>>, ValidatableType, MessageType>;
