import Sentence from "@dikac/t-string/message/sentence";
import Validatable from "@dikac/t-validatable/validatable";
import Property from "../../property/property/property";
import Value from "@dikac/t-value/value";

export default Value;
namespace Value {

    export const Parameter = ValueParameter;
    export const Object = ValueObject;
    export type Argument = ValueArgument;
}


/**
 * {@param valid} type is valid or not
 * {@param property} object property
 * {@param type} expected type
 */
export function ValueParameter(
    property : PropertyKey,
    valid : boolean,
    type : string,
    // {
    //     valid,
    //     property,
    //     type,
    // } : Validatable & Property & {type : string}
) : string {

    const sentence = new Sentence(valid);

    sentence.reject = 'value is not';
    sentence.accept = 'value is';


    sentence.subject = property.toString();
    sentence.expect = type;

    return sentence.message;
}

export type ValueArgument = Validatable & Property & {type : string};

export function ValueObject(
    // valid : boolean,
    // property : PropertyKey,
    // type : string,
    {
        valid,
        property,
        type,
    } : ValueArgument
) : string {

    return ValueParameter(property, valid, type);
}
