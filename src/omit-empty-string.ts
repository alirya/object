import {Object} from 'ts-toolbelt';


export type OmitEmptyStringType<O extends object> = Omit<O, keyof Object.Select<O, ''>>;

/**
 * remove undefined from {@param object}
 * @param object
 */
export default function OmitEmptyString<O extends object>(
    object : O,
)  : OmitEmptyStringType<O> {

    for(const property in object) {

        if((object[property] as any as string) === '') {

            delete object[property];
        }
    }

    return object;
}
