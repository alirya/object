import RecordParameter from "../../subject/record/allow";
import Validator from "@dikac/t-validator/validator";
import InferReturn from "@dikac/t-validator/validatable/infer-static";

export default function * MapParameters<
    Validators extends Record<PropertyKey, Validator>
>(
    value : RecordParameter<Validators>,
    validators : Validators,
) : Iterable<[keyof Validators, InferReturn<Validators[keyof Validators]>]> {

    for(let property in validators) {

        const validator = validators[property];
        const val = value[property];

        yield [property, validator(val) as InferReturn<Validators[keyof Validators]>];
    }
}
