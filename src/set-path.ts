import {Object} from 'ts-toolbelt';
import {set} from 'lodash-es';
import Object_ from './object/object.js';
import Value from '@axiona/value/value.js';

export function SetPathParameters<
    Properties extends ReadonlyArray<PropertyKey>,
    Value extends unknown,
    Record extends object,
>(
    object : Object.P.Omit<Record, Properties>,
    value : Value,
    ...properties: Properties
) : Object.P.Omit<Record, Properties> & Object.P.Record<Properties, Value> {

    set(object, properties, value);

    return object as Object.P.Omit<Record, Properties> & Object.P.Record<Properties, Value>;
}



export type SetPathArgument<
    Properties extends ReadonlyArray<PropertyKey>,
    ValueType extends unknown,
    Record extends object,
> = Object_<Record> & Value<ValueType> & {
    properties : Properties
};

export function SetPathParameter<
    Properties extends ReadonlyArray<PropertyKey>,
    ValueType extends unknown,
    Record extends object,
>(  {
        object,
        properties,
        value,
    } : SetPathArgument<Properties, ValueType, Record>
) : Object.P.Omit<Record, Properties> & Object.P.Record<Properties, ValueType> {

    return (SetPathParameters as any)(object, value, ...properties);
}


namespace SetPath {
    export const Parameters = SetPathParameters;
    export const Parameter = SetPathParameter;
    export type Argument<
        Properties extends ReadonlyArray<PropertyKey>,
        ValueType extends unknown,
        Record extends object,
    > = SetPathArgument<
        Properties,
        ValueType,
        Record
    >;
}
export default SetPath;
