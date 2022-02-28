import {Object} from 'ts-toolbelt';
import {set} from 'lodash';


export default function SetPathParameters<
    Properties extends ReadonlyArray<PropertyKey>,
    Value extends unknown,
    // Record extends Object.P.Record<Properties, unknown> = Object.P.Record<Properties, unknown>,
    Record extends object,
>(
    object : Object.P.Omit<Record, Properties>,
    value : Value,
    ...properties: Properties
) : Object.P.Omit<Record, Properties> & Object.P.Record<Properties, Value> {

    set(object, properties, value);

    return object as Object.P.Omit<Record, Properties> & Object.P.Record<Properties, Value>;
}
