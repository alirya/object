import Message from "@dikac/t-message/message";
import Property from "../property/property/property";
import Delimiter from "@dikac/t-string/delimiter/delimiter";
import {ObjectArgument} from "../assert/throwable/object";


export default Property;
namespace Property {

    export const Parameter = PropertyParameter;
    export const Object = PropertyObject;
    export type Argument = ObjectArgument;
}


export function PropertyParameter<MessageValue>(
    message : Message<MessageValue>,
    property : PropertyKey,
    delimiter : string = ' : ',
    conversion : (message:MessageValue)=>string = (value: MessageValue) => value + ''
) : Message<string> {

    let string = property.toString() + delimiter + conversion(message.message)

    return {message:string};
}

export type PropertyArgument<MessageValue> =
    Message<MessageValue> &
    Property &
    Partial<Delimiter> &
    {conversion ?: (message:MessageValue)=>string};

export function PropertyObject<MessageValue>(
    // message : Message<MessageValue>,
    // property : PropertyKey,
    // delimiter : string = ' : ',
    // conversion : (message:MessageValue)=>string = (value: MessageValue) => value + '',
    {
        message,
        property,
        delimiter,
        conversion,
    } : PropertyArgument<MessageValue>
) : Message<string> {

    return PropertyParameter({message}, property, delimiter, conversion);
}
