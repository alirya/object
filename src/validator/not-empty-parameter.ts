import Validator from '@alirya/validator/validator';
import {NotEmptyType as NotEmptyParameterReturn} from '../validatable/not-empty-parameters';
import NotEmptyString from '../assert/string/not-empty-parameter';
import Dynamic from '@alirya/validator/message/function/validatable-parameter';
import NotEmptyParameters from './not-empty-parameters';

export default function NotEmptyParameter<MessageType>() : Validator<object, object, boolean, boolean, NotEmptyParameterReturn<object, string>>;

export default function NotEmptyParameter<MessageType>(
    message : Dynamic<object, MessageType>
) : Validator<object, object, boolean, boolean, NotEmptyParameterReturn<object, MessageType>>;

export default function NotEmptyParameter<MessageType>(
    message : Dynamic<object, MessageType|string> = NotEmptyString
) : Validator<object, object, boolean, boolean, NotEmptyParameterReturn<object, MessageType|string>> {

    return NotEmptyParameters((value, valid) => message({valid, value}));

}
