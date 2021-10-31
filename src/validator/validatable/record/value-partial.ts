import ValidatableRecord from "./infer";
import Validator from "@dikac/t-validator/validator";
import IteratorValue from "../iterator/value";
import ValidatorsContainer from "../../validators/validators";
import Value from "@dikac/t-value/value";
import {ValueParameter} from "./value";

export default ValuePartial;
namespace ValuePartial {

    export const Parameter = ValuePartialParameter;
    export const Object = ValuePartialObject;
}

export function ValuePartialParameter<
    ValueType,
    Validators extends Record<PropertyKey, Validator<ValueType>>,
>(
    value : ValueType,
    validators : Validators,
    stop : boolean = false,
) : Partial<ValidatableRecord<Validators>> {

    let object = {};

    for(const [key, validatable] of IteratorValue.Parameter(value, validators)) {

        //const validator = validators[property];

        object[<PropertyKey>key] = validatable;

        if(validatable.valid === stop) {

            return object;
        }
    }

    return <ValidatableRecord<Validators>> object;
}

export function ValuePartialObject<
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

    return ValuePartialParameter(value, validators, stop);
}
