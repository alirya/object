import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordParameter from "./base/record/infer";
import Map from "./map";
import Instance from "@dikac/t-validator/validatable/dynamic";
export default function MapCallbackParameters<Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>, Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>, ValidatableType extends Validatable = Validatable, MessageType = unknown>(validators: Validators, map: (record: RecordParameter<Validators>, validators: Validators) => Result, validation: (result: Result) => ValidatableType, message: (result: Result) => MessageType): Map<Validators, Result, ValidatableType, MessageType>;
