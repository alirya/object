import RecordParameter from "../../base/record/infer";
import ValidatorsContainer from "../../validators/validators";
import Validator from "@dikac/t-validator/validator";
import Value from "@dikac/t-value/value";
import InferArgument from "@dikac/t-validator/base/infer";
import InferReturn from "@dikac/t-validator/validatable/infer-unambiguous";

export default function * Map<
    Validators extends Record<PropertyKey, Validator>
>(
    //values : RecordParameter<Validators>,
    //validators : Validators,
    {
        value,
        validators
    } : Value<RecordParameter<Validators>> & ValidatorsContainer<Validators>
) : Iterable<[keyof Validators, InferReturn<Validators[keyof Validators]>]> {

    for(let property in validators) {

        const validator = validators[property];
        const val = value[property];

        yield [property, validator(val) as InferReturn<Validators[keyof Validators]>];
    }
}
