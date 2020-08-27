import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import { O } from "ts-toolbelt";
import ReturnInfer from "@dikac/t-validator/validatable/infer";
import { Interface } from "./record-key-callback";
import Union from "../union";
export default function RecordKeyPartial<BaseT extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>, TypeT extends BaseT = BaseT, ValidatorT extends Validator<O.UnionOf<BaseT>, O.UnionOf<TypeT>> = Validator<O.UnionOf<BaseT>, O.UnionOf<TypeT>>, ValidatableT extends Validatable = Validatable, MessageT = unknown>(validator: ValidatorT, validation: (partial: Union<Record<PropertyKey, ReturnInfer<ValidatorT>>>) => ValidatableT, message: (partial: Union<Record<PropertyKey, ReturnInfer<ValidatorT>>>) => MessageT): Interface<BaseT, TypeT, ValidatorT, Union<Record<PropertyKey, ReturnInfer<ValidatorT>>>, ValidatableT, MessageT>;
