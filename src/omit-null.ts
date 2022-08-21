import {Object} from 'ts-toolbelt';

export type OmitNullType<O extends object> = Omit<O, keyof Object.Select<O, null>>;

/**
 * remove null from {@param object}
 * @param object
 */
export default function OmitNull<O extends object>(
    object : O,
)  : OmitNullType<O> {

    for(let property in object) {

        if(object[property] === null) {

            delete object[property];
        }
    }

    return object;
}
