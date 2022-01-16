import Validator from "@alirya/validator/validator";
import ValidatorValidatable from "@alirya/validator/validatable/validatable";
import Validatable from "@alirya/validatable/validatable";
import BaseValue from "@alirya/value/value";
import Validatables from "./validatables/validatables";
import Message from "@alirya/message/message";
import Messages from "../message/messages/messages";

export default interface Value <
    ValueType,
    MessageType,
    RecordType extends Record<PropertyKey, Validator<ValueType>>,
    Result extends Partial<Record<PropertyKey, ValidatorValidatable>>,
    ValidatableType extends Validatable
> extends
    Readonly<BaseValue<ValueType>>,
    Readonly<Validatable<boolean>>,
    Readonly<Validatables<Result>>,
    Readonly<Messages<Result>>,
    Readonly<Message<MessageType>>
{};

