import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NotEmptyValidatable from "../validatable/not-empty";
import Function from "@dikac/t-function/function";
import Instance from "@dikac/t-validator/parameter/instance/instance";
import Return from "@dikac/t-validator/return/return";

export default class NotEmpty<Msg>
    implements
        Validator<object, object, Readonly<Instance<any, Msg>>>,
        Message<Function<[Readonly<Value> & Readonly<Validatable>], Msg>>
{

    constructor(
       public message : Function<[Readonly<Value> & Readonly<Validatable>], Msg>
    ) {
    }

    validate<Argument extends object>(value: object): Return<object, Argument, object,  Readonly<Instance<any, Msg>>> {

        return <Return<object, Argument, object,  Readonly<Instance<any, Msg>>>> new NotEmptyValidatable(value, this.message);
    }
}
