import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "./validatable/record/infer";
import Map from "./map";
import ValidatorsContainer from "./validators/validators";
import Message from "@dikac/t-message/message";
export default MapAll;
declare namespace MapAll {
    const Parameter: typeof MapAllParameter;
    const Object: typeof MapAllObject;
    type Argument<Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, ValidatableType extends Validatable = Validatable, MessageType = unknown> = MapAllArgument<Validators, ValidatableType, MessageType>;
}
export declare type MapAllArgument<Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, ValidatableType extends Validatable = Validatable, MessageType = unknown> = ValidatorsContainer<Validators> & Message<(result: ReturnInfer<Validators>) => MessageType> & {
    validation: (result: ReturnInfer<Validators>) => ValidatableType;
};
export declare function MapAllParameter<Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, ValidatableType extends Validatable = Validatable, MessageType = unknown>(validators: Validators, validation: (result: ReturnInfer<Validators>) => ValidatableType, message: (result: ReturnInfer<Validators>) => MessageType): Map<Validators, ReturnInfer<Validators>, ValidatableType, MessageType>;
export declare function MapAllObject<Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, ValidatableType extends Validatable = Validatable, MessageType = unknown>({ validators, validation, message, }: MapAllArgument<Validators, ValidatableType, MessageType>): Map<Validators, ReturnInfer<Validators>, ValidatableType, MessageType>;
