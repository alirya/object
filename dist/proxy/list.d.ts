import Merge from "@dikac/t-array/union";
export default function List<Objects extends object[]>(object: Objects, factories: ((argument: Objects) => ProxyHandler<Partial<Merge<Objects>>>)[]): Merge<Objects>;
