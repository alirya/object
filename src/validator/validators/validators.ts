import Validator from '@alirya/validator/validator.js';

export default interface Validators<
    Object extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>
> {

    validators : Object;
}
