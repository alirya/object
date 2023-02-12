import Class from '@alirya/class/boolean/class.js';
import NameNotFound from './name-not-found.js';

export default function Name(value : any) : string {

    let constructor : string|undefined;

    if(value && value.constructor && value.constructor.name) {

        constructor = value.constructor.name;
    }

    if(!constructor || constructor === 'Function') {

        if(Class(value)) {

            return value.name;
        }
    }

    if(constructor) {

        return constructor;
    }

    if(typeof value === 'object') {

        return 'Object.js';
    }

    throw new Error(NameNotFound.Parameters(false, value));
}
