import Message from "@dikac/t-message/message";
import Property from "../property/property/property";
import Delimiter from "@dikac/t-string/separator/separator";
export declare type PropertyArgument<MessageValue> = Message<MessageValue> & Property & Partial<Delimiter> & {
    conversion?: (message: MessageValue) => string;
};
export default function PropertyParameter<MessageValue>({ message, property, separator, conversion, }: PropertyArgument<MessageValue>): Message<string>;
