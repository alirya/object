import ValidatorInterface from '@alirya/validator/simple';
import Instance from '@alirya/validator/validatable/validatable';
import MapCallback from '../../../dist/validatable/map-callback-parameters';
import ValidateMap from '../../../dist/validator/validatable/record/map-parameters';
import ValidatableInfer from '../../../dist/validator/validatable/record/infer';
import And from '../../../dist/validatable/and';
import MessageMap from '../../../dist/message/message/record/map';
import Validatable from '@alirya/validatable/validatable';
import Type from '@alirya/type/validator/type-parameters';

let validator = {
    name : Type('string'),
    address : Type('string'),
};

type TypeValidator = {
    name : ValidatorInterface<any, string, Instance<any, string>>,
    address :ValidatorInterface<any, string, Instance<any, string>>,
};

type Type = {
    name : string,
    address : string,
};

let value = {
    name : 'name',
    address : 'address',
};

it('implicit', function() {

    let validatable = new MapCallback(value, validator, ValidateMap, And, MessageMap);

    let unknown : unknown = validatable.value;

    let string : Type = validatable.value;

});

describe('explicit', function() {

    it('auto', function() {

        let validatable = new MapCallback<
            Type,
            TypeValidator,
            ValidatableInfer<TypeValidator>,
            Validatable,
            Type
        >(
            value,
            validator,
            ValidateMap,
            And,
            result => MessageMap(result)
        );

        let unknown : unknown = validatable.value;
        let record : Type = validatable.value;

    });

});
