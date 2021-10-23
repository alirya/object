import Value from "@dikac/t-value/value";
export default function Object_({ value, error, }: Value<unknown> & {
    error?: (value: unknown) => Error;
}): object;
