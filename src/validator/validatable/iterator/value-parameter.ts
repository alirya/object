import ValidatorsContainer from "../../validators/validators";
import Validator from "@alirya/validator/validator";
import InferReturn from "@alirya/validator/validatable/infer-static";
import Value from "@alirya/value/value";

export default function * ValueParameter<
    ValueType,
    Validators extends Record<PropertyKey, Validator<ValueType>>,
>(
    {
        value,
        validators
    } : ValidatorsContainer<Validators> & Value<ValueType>
) : Iterable<[keyof Validators, InferReturn<Validators[keyof Validators]>]> {

    let object  = {};

    for(let property in validators) {

        const validator = validators[property];

        yield [
            object[<PropertyKey>property],
            validator(value) as InferReturn<Validators[keyof Validators]>
        ];
    }
}
