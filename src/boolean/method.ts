/**
 * check if method or function.js exists
 */
export default function Method(object : object, property : PropertyKey) : boolean {

    return typeof object[property] === 'function';
}
