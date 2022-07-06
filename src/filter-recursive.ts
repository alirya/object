import {O} from 'ts-toolbelt';
import IsObject from './boolean/object.js';
import {DeepPartial} from 'utility-types';
import RecursiveUnion from './recursive-union.js';

export default function FilterRecursive<
    Object extends Record<PropertyKey, any>
>(
    record : Object,
    filter : (value: RecursiveUnion<Object>|O.UnionOf<Object>, key:keyof Object)=>boolean,
) : DeepPartial<Object> {

    let result = {};

    for(const property in record) {

        let value : any = record[property];

        if(IsObject(value)) {

            value = FilterRecursive(value as any, filter);
        }

        if(filter(value, <keyof Object>property)) {

            result[<PropertyKey>property] = value;
        }
    }

    return result as DeepPartial<Object>;
}
