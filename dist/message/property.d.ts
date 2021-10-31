import Message from "@dikac/t-message/message";
import Property from "../property/property/property";
import Delimiter from "@dikac/t-string/delimiter/delimiter";
import { ObjectArgument } from "../assert/throwable/object";
export default Property;
declare namespace Property {
    const Parameter: typeof PropertyParameter;
    const Object: typeof PropertyObject;
    type Argument = ObjectArgument;
}
export declare function PropertyParameter<MessageValue>(message: Message<MessageValue>, property: PropertyKey, delimiter?: string, conversion?: (message: MessageValue) => string): Message<string>;
export declare type PropertyArgument<MessageValue> = Message<MessageValue> & Property & Partial<Delimiter> & {
    conversion?: (message: MessageValue) => string;
};
export declare function PropertyObject<MessageValue>({ message, property, delimiter, conversion, }: PropertyArgument<MessageValue>): Message<string>;
