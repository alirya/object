import {O} from 'ts-toolbelt';
import IsObject from './boolean/object.js';
import {DeepPartial} from 'utility-types';
import RecursiveUnion from './recursive-union.js';
import {Array} from 'ts-toolbelt/out/Misc/JSON/_api.js';

export default function FilterRecursive<
    ObjectType extends Record<PropertyKey, any>
>(
    record : ObjectType,
    filter : (value: RecursiveUnion<ObjectType>|O.UnionOf<ObjectType>, key:keyof ObjectType)=>boolean,
) : DeepPartial<ObjectType> {

    const result = {};

    for(const property in record) {

        let value : any = record[property];
        const array = Array.isArray(value);

        if(IsObject(value)) {

            value = FilterRecursive(value as any, filter);
        }

        if(filter(value, <keyof ObjectType>property)) {

            if(array) {
                value = Object.values(value);
            }

            result[<PropertyKey>property] = value;
        }
    }

    return result as DeepPartial<ObjectType>;
}
