import Validator from '@axiona/validator/validator.js';

export default interface Validators<
    Object extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>
> {

    validators : Object;
}
