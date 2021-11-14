import Message from "@dikac/t-message/message";
import Property from "../property/property/property";
import Delimiter from "@dikac/t-string/separator/separator";
import PropertyParameters from "./property-parameters";

export type PropertyArgument<MessageValue> =
    Message<MessageValue> &
    Property &
    Partial<Delimiter> &
    {conversion ?: (message:MessageValue)=>string};

export default function PropertyParameter<MessageValue>(
    // message : Message<MessageValue>,
    // property : PropertyKey,
    // delimiter : string = ' : ',
    // conversion : (message:MessageValue)=>string = (value: MessageValue) => value + '',
    {
        message,
        property,
        separator,
        conversion,
    } : PropertyArgument<MessageValue>
) : Message<string> {

    return PropertyParameters({message}, property, separator, conversion);
}
