import Validator from "@alirya/validator/validator";
import MapInterface from "../../../map";
import Return from "@alirya/validator/validatable/infer-static";
import Value from "@alirya/value/value";
import ValidatorContainer from "@alirya/validator/validator/validator";
import RecordKeyPartialParameters from "./record-key-partial-parameters";

export default function RecordKeyPartialParameter<
    RecordType extends Record<PropertyKey, any>,
    ValidatorType extends Validator<keyof RecordType>,
>(
    {
        value,
        validator,
        stop = false,
    } : Value<RecordType> & ValidatorContainer<ValidatorType> & {stop ?: boolean}
) : Partial<MapInterface<RecordType, Return<ValidatorType>>> {

    return RecordKeyPartialParameters(value, validator, stop);
}
