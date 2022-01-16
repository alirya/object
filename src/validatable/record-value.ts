import Validator from "@alirya/validator/validator";
import Validatable from "@alirya/validatable/validatable";
import ValidatableContainer from "@alirya/validatable/validatable/validatable";
import ValidatorContainer from "@alirya/validator/validator/validator";
import Value from "@alirya/value/value";
import Validatables from "./validatables/validatables";
import Message from "@alirya/message/message";
import {O} from "ts-toolbelt";

export default interface RecordValue<
    MessageType = unknown,
    ValueType extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
    ValidatorType extends Validator<O.UnionOf<ValueType>> = Validator<O.UnionOf<ValueType>>,
    Result extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>,
    ValidatableType extends Validatable = Validatable
> extends
    ValidatorContainer<ValidatorType>,
    ValidatableContainer<ValidatableType>,
    Value<ValueType>,
    Validatable,
    Validatables<Result>,
    Message<MessageType>
{

}
