import Value from '@alirya/value/value';
import Validatable from '@alirya/validatable/validatable';
import Message from '@alirya/message/message';
import EmptyArgument from '../boolean/empty';
import MemoizeAccessor from '../function/memoize-accessor';

export type EmptyType<Type extends object, MessageType> = Readonly<Value<Type> & Message<MessageType> & Validatable>;

export class EmptyParameters<Type extends object, MessageType>
    implements
        EmptyType<Type, MessageType>
{
    readonly valid : boolean;
    #message : (value:Type, valid : boolean)=>MessageType;

    constructor(
        readonly value : Type,
        message : (value:Type, valid : boolean)=>MessageType,
    ) {

        this.value = value;
        this.#message = message;
        this.valid = EmptyArgument(value);
    }

    @MemoizeAccessor()
    get message() : MessageType {

        return this.#message(this.value, this.valid);
    }
}



export type EmptyArgument<Type extends object, MessageType> =
    Value<Type> &
    Message<(result:Readonly<Value<Type> & Validatable>)=>MessageType>;


export class EmptyParameter<Type extends object, MessageType> extends EmptyParameters<Type, MessageType> {

    constructor({value, message} : EmptyArgument<Type, MessageType>) {

        super(value, ()=>message(this));
    }
}




namespace Empty {
    export const Parameters = EmptyParameters;
    export const Parameter = EmptyParameter;
    export type Type<Type extends object, MessageType> = EmptyType<Type, MessageType>;
    export type Argument<Type extends object, MessageType> = EmptyArgument<Type, MessageType>;
}
export default Empty;
