import {Object} from 'ts-toolbelt';
import Object_ from './object/object';
import SetPathParameters from './set-path-parameters';
import Value from '@alirya/value/value';


export type SetPathParameterArgument<
    Properties extends ReadonlyArray<PropertyKey>,
    ValueType extends unknown,
    Record extends object,
> = Object_<Record> & Value<ValueType> & {
    properties : Properties
};

export default function SetPathParameter<
    Properties extends ReadonlyArray<PropertyKey>,
    ValueType extends unknown,
    Record extends object,
>(  {
        object,
        properties,
        value,
    } : SetPathParameterArgument<Properties, ValueType, Record>
) : Object.P.Omit<Record, Properties> & Object.P.Record<Properties, ValueType> {

    return (SetPathParameters as any)(object, value, ...properties);
}
