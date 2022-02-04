import Validator from '@alirya/validator/validator';
import NotEmptyValidatable, {NotEmptyType as NotEmptyParametersReturn} from '../validatable/not-empty-parameters';
import NotEmptyString from '../assert/string/not-empty-parameters';
import Dynamic from '@alirya/validator/message/function/validatable-parameters';

export default function NotEmptyParameters<MessageType>() : Validator<object, object, boolean, boolean, NotEmptyParametersReturn<object, string>>;

export default function NotEmptyParameters<MessageType>(
    message : Dynamic<object, MessageType>
) : Validator<object, object, boolean, boolean, NotEmptyParametersReturn<object, MessageType>>;

export default function NotEmptyParameters<MessageType>(
    message : Dynamic<object, MessageType|string> = NotEmptyString
) : Validator<object, object, boolean, boolean, NotEmptyParametersReturn<object, MessageType>> {

    return function (value) {

        return new NotEmptyValidatable(value, message);

    } as Validator<object, object, boolean, boolean, NotEmptyParametersReturn<object, MessageType>>;
}
