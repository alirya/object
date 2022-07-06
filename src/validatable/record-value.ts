import Validator from '@alirya/validator/validator.js';
import Validatable from '@alirya/validatable/validatable.js';
import ValidatableContainer from '@alirya/validatable/validatable/validatable.js';
import ValidatorContainer from '@alirya/validator/validator/validator.js';
import Value from '@alirya/value/value.js';
import Validatables from './validatables/validatables.js';
import Message from '@alirya/message/message.js';
import {O} from 'ts-toolbelt';

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
