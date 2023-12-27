import Message from '@axiona/message/message.js';
import Property from '../property/property/property.js';
import Delimiter from '@axiona/string/separator/separator.js';

export function PropertyParameters<MessageValue>(
    message : Message<MessageValue>,
    property : PropertyKey,
    separator  = ' : ',
    conversion : (message:MessageValue)=>string = (value: MessageValue) => value + ''
) : Message<string> {

    const string = property.toString() + separator + conversion(message.message);

    return {message:string};
}


export type PropertyArgument<MessageValue> =
    Message<MessageValue> &
    Property &
    Partial<Delimiter> &
    {conversion ?: (message:MessageValue)=>string};

export function PropertyParameter<MessageValue>(
    {
        message,
        property,
        separator,
        conversion,
    } : PropertyArgument<MessageValue>
) : Message<string> {

    return PropertyParameters({message}, property, separator, conversion);
}


namespace Property {
    export const Parameters = PropertyParameters;
    export const Parameter = PropertyParameter;
    export type Argument<MessageValue> = PropertyArgument<MessageValue> ;
}
export default Property;
