import Message from "@alirya/message/message";

export default function PropertyParameters<MessageValue>(
    message : Message<MessageValue>,
    property : PropertyKey,
    separator : string = ' : ',
    conversion : (message:MessageValue)=>string = (value: MessageValue) => value + ''
) : Message<string> {

    let string = property.toString() + separator + conversion(message.message)

    return {message:string};
}
