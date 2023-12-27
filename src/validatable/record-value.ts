// import Validator from '@axiona/validator/validator.js';
// import Validatable from '@axiona/validatable/validatable.js';
// import ValidatableContainer from '@axiona/validatable/validatable/validatable.js';
// import ValidatorContainer from '@axiona/validator/validator/validator.js';
// import Value from '@axiona/value/value.js';
// import Validatables from './validatables/validatables.js';
// import Message from '@axiona/message/message.js';
// import {O} from 'ts-toolbelt';
//
// export default interface RecordValue<
//     MessageType = unknown,
//     ValueType extends Record<PropertyKey, unknown> = Record<PropertyKey, unknown>,
//     ValidatorType extends Validator<O.UnionOf<ValueType>> = Validator<O.UnionOf<ValueType>>,
//     Result extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>,
//     ValidatableType extends Validatable = Validatable
// > extends
//     ValidatorContainer<ValidatorType>,
//     ValidatableContainer<ValidatableType>,
//     Value<ValueType>,
//     Validatable,
//     Validatables<Result>,
//     Message<MessageType>
// {
//
// }
