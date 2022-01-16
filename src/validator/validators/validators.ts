import Validator from '@alirya/validator/validator';

export default interface Validators<
    Object extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>
> {

    validators : Object;
}
