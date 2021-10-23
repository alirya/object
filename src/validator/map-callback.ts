import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordParameter from "./base/record/infer";
import Map from "./map";
import ValidatableMapInterface from "../validatable/map";
import ValidatableMapCallback from "../validatable/map-callback";
import RecordBase from "./base/record/infer";
import RecordType from "./type/record/infer";
import Instance from "@dikac/t-validator/validatable/validatable";
import ValidatableReplace from "@dikac/t-validatable/boolean/replace";
import Simple from "@dikac/t-validator/validatable/simple";
import ValidatorsContainer from "./validators/validators";
import Message from "@dikac/t-message/message";
import ValidatableContainer from "@dikac/t-validatable/validatable/validatable";
//
// export default class MapCallback<
//     Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
//     Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
//     ValidatableType extends Validatable = Validatable,
//     MessageType = unknown,
// > implements Map <Validators, Result, ValidatableType, MessageType> {
//     constructor(
//         public validators : Validators,
//         public map : (record:RecordParameter<Validators>, validators : Validators)=>Result,
//         public validation : (result:Result)=>ValidatableType,
//         public message : (result:Result)=>MessageType
//     ) {
//     }
//
//     validate<Argument extends RecordType<Validators>>(
//         argument: Argument
//     ) : ValidatableReplace<ValidatableMapInterface<MessageType, Validators, Result, ValidatableType, Argument>, true>;
//
//     validate<Argument extends RecordBase<Validators>>(
//         argument: Argument
//     ) : Simple<RecordBase<Validators>, Argument, RecordType<Validators>, ValidatableMapInterface<MessageType, Validators, Result, ValidatableType, RecordBase<Validators>>>;
//
//     validate<Argument extends RecordBase<Validators>>(
//         argument: Argument
//     ) {
//
//         return new ValidatableMapCallback(argument, this.validators, this.map, this.validation, this.message) as
//             ValidatableReplace<ValidatableMapInterface<MessageType, Validators, Result, ValidatableType, Argument>, true>;
//     }
// }

export type Argument<
    Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
> =
    ValidatorsContainer<Validators> &
    Message<(result:Result)=>MessageType> &
    // TODO MOVE TO STANDARD VALIDATOR
    {validation : (result:Result)=>ValidatableType} &
    {map:(record:RecordParameter<Validators>, validators : Validators)=>Result};

export default function MapCallback<
    Validators extends Record<PropertyKey, Validator> = Record<PropertyKey, Validator>,
    Result extends Partial<Record<PropertyKey, Instance>> = Partial<Record<PropertyKey, Instance>>,
    ValidatableType extends Validatable = Validatable,
    MessageType = unknown,
>(
    // validators : Validators,
    // map : (record:RecordParameter<Validators>, validators : Validators)=>Result,
    // validation : (result:Result)=>ValidatableType,
    // message : (result:Result)=>MessageType,
    {validators, map, validation, message} : Argument<Validators, Result, ValidatableType, MessageType>
) : Map<Validators, Result, ValidatableType, MessageType> {

    return function (value ) {

        return new ValidatableMapCallback({value, validators, map, validation, message});

    } as Map<Validators, Result, ValidatableType, MessageType>

}



