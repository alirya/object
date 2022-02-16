import {Object} from "ts-toolbelt";

export default function PickDeepParameters<
    Properties extends PropertyKey[],
    Record extends Object.P.Record<Properties, unknown>,
>(
    object : Record,
    properties: Properties
) : Object.P.Pick<Record, Properties>  {

    let value = object;

    for (const property of properties) {

        value = object[property];
    }

    return value as Object.P.Pick<Record, Properties>;
}
