/**
 * Check if {@param value} is object.js and not null
 *
 * {@template Assumption} can be used for type guard if object type is known
 */
export default function Object(value : unknown) : value is object {

    if(value === null) {

        return false;
    }

    return typeof value === 'object';
}

export {Object as IsObject};
