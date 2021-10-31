import ValidatableRecord from "./infer";
import Validator from "@dikac/t-validator/validator";
import IteratorValue from "../iterator/value";
import ValidatorsContainer from "../../validators/validators";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import {ValuePartialArgument, ValuePartialObject, ValuePartialParameter, ValuePartialType} from "../../value-partial";

export default Value;
namespace Value {

    export const Parameter = ValueParameter;
    export const Object = ValueObject;
}

export function ValueParameter<
    ValueType,
    Validators extends Record<PropertyKey, Validator<ValueType>>,
>(
    value : ValueType,
    validators : Validators
) : ValidatableRecord<Validators> {

    let object  = {};

    for(const [key, validatable] of IteratorValue.Parameter(value, validators)) {

        object[<PropertyKey>key] = validatable;
    }

    return <ValidatableRecord<Validators>> object;
}

export function ValueObject<
    ValueType,
    Validators extends Record<PropertyKey, Validator<ValueType>>,
>(
    {
        value,
        validators
    } : ValidatorsContainer<Validators> & Value<ValueType>
) : ValidatableRecord<Validators> {

    return ValueParameter(value, validators);
}
