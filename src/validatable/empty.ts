import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import EmptyArgument from "../boolean/empty";
import MemoizeAccessor from "../function/memoize-accessor";


export default Empty;

export class EmptyParameter<Type extends object, MessageType>
    implements
        EmptyType<Type, MessageType>
{
    readonly valid : boolean;
    #message : (value:Type, valid : boolean)=>MessageType;
    //readonly value : Type;

    constructor(
        readonly value : Type,
        message : (value:Type, valid : boolean)=>MessageType,
       //  {value, message} : Value<Type> & Message<(result:Readonly<Value<Type> & Validatable>)=>MessageType>
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

export type EmptyType<Type extends object, MessageType> = Readonly<Value<Type> & Message<MessageType> & Validatable>;


export class EmptyObject<Type extends object, MessageType> extends EmptyParameter<Type, MessageType> {

    constructor({value, message} : EmptyArgument<Type, MessageType>) {

        super(value, ()=>message(this));
    }
}

namespace Empty {

    export const Parameter = EmptyParameter;
    export const Object = EmptyObject;

    export type Type<
        ValueType extends object,
        MessageType
    > = EmptyType<
        ValueType,
        MessageType
    >

    export type Argument<
        ValueType extends object,
        MessageType
    > = EmptyArgument<
        ValueType,
        MessageType
    >;
}

