import {Object} from "ts-toolbelt";

export default function PickDeepParameters<
    Properties extends ReadonlyArray<PropertyKey>,
    Record extends Object.P.Record<Properties, unknown>,
>(
    object : Record,
    ...properties: Properties
) : Object.Path<Record, Properties>  {

    let value : Object.Path<Record, Properties>|Record = object;

    for (const property of properties) {

        value = value[property];
    }

    return value as Object.Path<Record, Properties>;
}
