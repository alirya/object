import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ReturnInfer from "./validatable/record/infer";
import Map from "./map";
import ValidatorsContainer from "./validators/validators";
import Message from "@dikac/t-message/message";
export declare type MapAllArgument<Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, ValidatableType extends Validatable = Validatable, MessageType = unknown> = ValidatorsContainer<Validators> & Message<(result: ReturnInfer<Validators>) => MessageType> & {
    validation: (result: ReturnInfer<Validators>) => ValidatableType;
};
export default function MapAllParameter<Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, ValidatableType extends Validatable = Validatable, MessageType = unknown>({ validators, validation, message, }: MapAllArgument<Validators, ValidatableType, MessageType>): Map<Validators, ReturnInfer<Validators>, ValidatableType, MessageType>;
