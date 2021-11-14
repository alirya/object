import Message from "@dikac/t-message/message";
export default function PropertyParameters<MessageValue>(message: Message<MessageValue>, property: PropertyKey, separator?: string, conversion?: (message: MessageValue) => string): Message<string>;
