import Message from '@alirya/message/message';

export default interface Messages<
    Object extends Partial<Record<PropertyKey, Message>> = Partial<Record<PropertyKey, Message>>
> {

    messages : Object;
}

