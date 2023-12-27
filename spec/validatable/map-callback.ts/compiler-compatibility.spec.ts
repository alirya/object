import ValidatorInterface from '@axiona/validator/simple.js';
import Instance from '@axiona/validator/validatable/validatable.js';
import {MapCallbackParameters} from '../../../dist/validatable/map-callback.js';
import {MapParameters} from '../../../dist/validator/validatable/record/map.js';
import ValidatableInfer from '../../../dist/validator/validatable/record/infer.js';
import And from '../../../dist/validatable/and.js';
import MessageMap from '../../../dist/message/message/record/map.js';
import Validatable from '@axiona/validatable/validatable.js';
import {TypeParameters} from '@axiona/type/validator/type.js';

const validator = {
    name : TypeParameters('string'),
    address : TypeParameters('string'),
};

type TypeValidator = {
    name : ValidatorInterface<any, string, string>,
    address :ValidatorInterface<any, string, string>,
};

type Type = {
    name : string,
    address : string,
};

const value = {
    name : 'name',
    address : 'address',
};

it('implicit', function() {

    const validatable = new MapCallbackParameters(value, validator, MapParameters, And, MessageMap);

    const unknown : unknown = validatable.value;

    const string : Type = validatable.value;

});

describe('explicit', function() {

    it('auto', function() {

        const validatable = new MapCallbackParameters<
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

        const unknown : unknown = validatable.value;
        const record : Type = validatable.value;

    });

});
