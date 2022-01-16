import Validatable from '@alirya/validatable/validatable';

export default interface Validatables<
    Object extends Partial<Record<PropertyKey, Validatable>> = Partial<Record<PropertyKey, Validatable>>
> {

    validatables : Object;
}

