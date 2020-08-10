import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import ReturnInfer from "./validatable/record/infer";
import { Interface } from "./map-callback";
import Union from "../union";
export default function MapPartial<Container extends Record<any, Validator> = Record<PropertyKey, Validator>, ValidatableT extends Validatable = Validatable, MessageT = unknown>(validators: Container, validation: Function<[Union<ReturnInfer<Container>>], ValidatableT>, message: Function<[Union<ReturnInfer<Container>>], MessageT>): Omit<Interface<Container, Union<ReturnInfer<Container>>, ValidatableT, MessageT>, 'map'>;
