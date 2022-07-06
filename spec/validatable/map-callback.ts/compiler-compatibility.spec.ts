import ValidatorInterface from '@alirya/validator/simple.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import {MapCallbackParameters} from '../../../dist/validatable/map-callback.js';
import {MapParameters} from '../../../dist/validator/validatable/record/map.js';
import ValidatableInfer from '../../../dist/validator/validatable/record/infer.js';
import And from '../../../dist/validatable/and.js';
import MessageMap from '../../../dist/message/message/record/map.js';
import Validatable from '@alirya/validatable/validatable.js';
import {TypeParameters} from '@alirya/type/validator/type.js';

let validator = {
    name : TypeParameters('string'),
    address : TypeParameters('string'),
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

    let validatable = new MapCallbackParameters(value, validator, MapParameters, And, MessageMap);

    let unknown : unknown = validatable.value;

    let string : Type = validatable.value;

});

describe('explicit', function() {

    it('auto', function() {

        let validatable = new MapCallbackParameters<
            Type,
            TypeValidator,
            ValidatableInfer<TypeValidator>,
            Validatable,
            Type
        >(
            value,
            validator,
            MapParameters,
            And,
            result => MessageMap(result)
        );

        let unknown : unknown = validatable.value;
        let record : Type = validatable.value;

    });

});
