import Validatable from '@axiona/validatable/validatable.js';

export default interface Validatables<
    Object extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>
> {

    validatables : Object;
}

