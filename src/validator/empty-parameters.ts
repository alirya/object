import Validator from '@alirya/validator/validator';
import EmptyValidatable, {EmptyType as EmptyParametersReturn} from '../validatable/empty-parameters';
import EmptyString from '../assert/string/empty-parameters';
import Dynamic from '@alirya/validator/message/function/validatable-parameters';


export default function EmptyParameters() : Validator<object, object, boolean, boolean, EmptyParametersReturn<object, string>>;

export default function EmptyParameters<MessageType>(
    message : Dynamic<object, MessageType>
) : Validator<object, object, boolean, boolean, EmptyParametersReturn<object, MessageType>>;


export default function EmptyParameters<MessageType>(
    message : Dynamic<object, MessageType|string> = EmptyString
) : Validator<object, object, boolean, boolean, EmptyParametersReturn<object, MessageType>> {

    return function (value) {

        return new EmptyValidatable(value, message);

    } as Validator<object, object, boolean, boolean, EmptyParametersReturn<object, MessageType>>;
}


