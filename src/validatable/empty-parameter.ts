import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";
import Message from "@alirya/message/message";
import EmptyArgument from "../boolean/empty";
import EmptyParameters from "./empty-parameters";


export type EmptyArgument<Type extends object, MessageType> =
    Value<Type> &
    Message<(result:Readonly<Value<Type> & Validatable>)=>MessageType>;


export default class EmptyParameter<Type extends object, MessageType> extends EmptyParameters<Type, MessageType> {

    constructor({value, message} : EmptyArgument<Type, MessageType>) {

        super(value, ()=>message(this));
    }
}


