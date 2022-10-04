import {Object} from 'ts-toolbelt';
import {get} from 'lodash';
import Object_ from '../../object/object';

export function PickPathParameters<
    Properties extends ReadonlyArray<PropertyKey>,
    Record extends Object.P.Record<Properties, unknown, ['?', 'W']> = Object.P.Record<Properties, unknown, ['?', 'W']>,
>(
    object : Record,
    ...properties: Properties
) : Object.Path<Record, Properties>|undefined;

export function PickPathParameters<
    Properties extends ReadonlyArray<PropertyKey>,
    Record extends Object.P.Record<Properties, unknown> = Object.P.Record<Properties, unknown>,
>(
    object : Record,
    ...properties: Properties
) : Object.Path<Record, Properties>;

export function PickPathParameters<
    Properties extends ReadonlyArray<PropertyKey>,
    Record extends Object.P.Record<Properties, unknown> = Object.P.Record<Properties, unknown>,
>(
    object : Record,
    ...properties: Properties
) : Object.Path<Record, Properties>  {

    if(properties.length) {

        return get(object, properties);

    } else {

        return object as Object.Path<Record, Properties>;
    }
}


export type PickDeepArgument<
    Properties extends ReadonlyArray<PropertyKey>,
    Record extends Object.P.Record<Properties, unknown, ['?'|'!', 'W'|'R']> = Object.P.Record<Properties, unknown, ['?'|'!', 'W'|'R']>,
> = Object_<Record> & {
    properties : Properties
};

export function PickPathParameter<
    Properties extends ReadonlyArray<PropertyKey>,
    Record extends Object.P.Record<Properties, unknown, ['?', 'W']> = Object.P.Record<Properties, unknown, ['?', 'W']>,
>(  {
        object,
        properties,
    } : PickDeepArgument<Properties, Record>
) : Object.Path<Record, Properties>|undefined;

export function PickPathParameter<
    Properties extends ReadonlyArray<PropertyKey>,
    Record extends Object.P.Record<Properties, unknown> = Object.P.Record<Properties, unknown>,
>(  {
        object,
        properties,
    } : PickDeepArgument<Properties, Record>
) : Object.Path<Record, Properties>;

export function PickPathParameter<
    Properties extends ReadonlyArray<PropertyKey>,
    Record extends Object.P.Record<Properties, unknown> = Object.P.Record<Properties, unknown>,
>(  {
        object,
        properties,
    } : PickDeepArgument<Properties, Record>
) : Object.Path<Record, Properties>  {


    return (PickPathParameters as any)(object, ...properties);
}


namespace PickPath {
    export const Parameters = PickPathParameters;
    export const Parameter = PickPathParameter;
    export type Argument<
        Properties extends ReadonlyArray<PropertyKey>,
        Record extends Object.P.Record<Properties, unknown> = Object.P.Record<Properties, unknown>,
    > = PickDeepArgument<
        Properties,
        Record
    >;
}
export default PickPath;
