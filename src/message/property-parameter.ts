import Message from '@alirya/message/message';
import Property from '../property/property/property';
import Delimiter from '@alirya/string/separator/separator';
import PropertyParameters from './property-parameters';

export type PropertyArgument<MessageValue> =
    Message<MessageValue> &
    Property &
    Partial<Delimiter> &
    {conversion ?: (message:MessageValue)=>string};

export default function PropertyParameter<MessageValue>(
    {
        message,
        property,
        separator,
        conversion,
    } : PropertyArgument<MessageValue>
) : Message<string> {

    return PropertyParameters({message}, property, separator, conversion);
}
