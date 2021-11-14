import ValidatorSimple from "@dikac/t-validator/simple";
import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableMap from "../validatable/map";
import RecordBase from "./base/record/infer";
import RecordType from "./type/record/infer";
import Instance from "@dikac/t-validator/validatable/dynamic";

type Map<
    ValidatorsType extends Record<PropertyKey, Validator>,
    Result extends Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable,
    MessageType,
> =
    ValidatorSimple<
        RecordBase<ValidatorsType>,
        RecordType<ValidatorsType>,
        ValidatableMap<MessageType, ValidatorsType, Result, ValidatableType, RecordBase<ValidatorsType>>
    >/* ,
    Validation<(result:Result)=>ValidatableType> ,
    Validators<ValidatorsType>,
    Message<(result:Result)=>MessageType>*/
;
export default Map;






