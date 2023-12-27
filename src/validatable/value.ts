import Validator from '@axiona/validator/validator.js';
import ValidatorValidatable from '@axiona/validator/validatable/validatable.js';
import Validatable from '@axiona/validatable/validatable.js';
import BaseValue from '@axiona/value/value.js';
import Validatables from './validatables/validatables.js';
import Message from '@axiona/message/message.js';
import Messages from '../message/messages/messages.js';

// export default interface Value <
//     ValueType,
//     MessageType,
//     RecordType extends Record<PropertyKey, Validator<ValueType>>,
//     Result extends Partial<Record<PropertyKey, ValidatorValidatable>>,
//     ValidatableType extends Validatable
// > extends
//     Readonly<BaseValue<ValueType>>,
//     Readonly<Validatable<boolean>>,
//     Readonly<Validatables<Result>>,
//     Readonly<Messages<Result>>,
//     Readonly<Message<MessageType>>
// {}

