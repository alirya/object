import Validator from '@alirya/validator/simple';
import ObjectValidatable from '../validatable/objecparameters';
import Instance from '@alirya/validator/validatable/validatable';
import ObjectString from '../assert/string/objecparameters';
import Simple from '@alirya/validator/message/function/simple-parameters';

export default function ObjectParameters() : Validator<unknown, object, Readonly<Instance<object, string>>>;

export default function ObjectParameters<MessageType>(
    message : Simple<unknown, object, MessageType>
) : Validator<unknown, object, Readonly<Instance<object, MessageType>>>;

export default function ObjectParameters<MessageType>(
    message : Simple<unknown, object, MessageType|string> = ObjectString
) : Validator<unknown, object, Readonly<Instance<object, MessageType>>> {

    return function (value ) {

        return  ObjectValidatable(value, message);

    } as Validator<unknown, object, Readonly<Instance<object, MessageType>>>;
}
