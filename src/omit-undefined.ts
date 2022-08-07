import {Object} from 'ts-toolbelt';


export type OmitUndefinedType<O extends object> = Omit<O, keyof Object.Select<O, undefined>>;

/**
 * remove undefined from {@param object}
 * @param object
 */
export default function OmitUndefined<O extends object>(
    object : O,
)  : OmitUndefinedType<O> {

    for(let property in object) {

        if(object[property] === undefined) {

            delete object[property];
        }
    }

    return object;
}
