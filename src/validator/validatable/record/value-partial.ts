import ValidatableRecord from "./infer";
import Validator from "@dikac/t-validator/validator";
import IteratorValue from "../iterator/value";
import ValidatorsContainer from "../../validators/validators";
import Value from "@dikac/t-value/value";

export default function ValuePartial<
    ValueType,
    Validators extends Record<PropertyKey, Validator<ValueType>>,
>(
    // value : ValueType,
    // validators : Validators,
    // stop : boolean = false,
    {
        value,
        validators,
        stop = false,
    } : Value<ValueType> & ValidatorsContainer<Validators> & {stop ?: boolean}
) : Partial<ValidatableRecord<Validators>> {

    let object = {};

    for(const [key, validatable] of IteratorValue({value, validators})) {

        //const validator = validators[property];

        object[<PropertyKey>key] = validatable;

        if(validatable.valid === stop) {

            return object;
        }
    }

    return <ValidatableRecord<Validators>> object;
}
