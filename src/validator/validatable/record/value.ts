import ValidatableRecord from "./infer";
import Validator from "@dikac/t-validator/validator";
import IteratorValue from "../iterator/value";
import ValidatorsContainer from "../../validators/validators";
import Value from "@dikac/t-value/value";

export default function Value<
    ValueType,
    Validators extends Record<PropertyKey, Validator<ValueType>>,
>(
    //value : ValueType,
    //validators : Validators
    {
        value,
        validators
    } : ValidatorsContainer<Validators> & Value<ValueType>
) : ValidatableRecord<Validators> {

    let object  = {};

    for(const [key, validatable] of IteratorValue({value, validators})) {

        object[<PropertyKey>key] = validatable;
    }

    return <ValidatableRecord<Validators>> object;
}
