import Merge from "@dikac/t-array/union";
export default function MergeAnonymous<Target extends object, Handlers extends ProxyHandler<Target>[]>(...handlers: Handlers): Merge<Handlers>;
