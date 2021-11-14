import ValidatableRecord from "./infer";
import Validator from "@dikac/t-validator/validator";
import IteratorValue from "../iterator/value";

export default function ValuePartialParameters<
    ValueType,
    Validators extends Record<PropertyKey, Validator<ValueType>>,
>(
    value : ValueType,
    validators : Validators,
    stop : boolean = false,
) : Partial<ValidatableRecord<Validators>> {

    let object = {};

    for(const [key, validatable] of IteratorValue.Parameters(value, validators)) {

        //const validator = validators[property];

        object[<PropertyKey>key] = validatable;

        if(validatable.valid === stop) {

            return object;
        }
    }

    return <ValidatableRecord<Validators>> object;
}
