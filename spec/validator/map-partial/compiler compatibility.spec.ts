import {MapPartialParameters} from '../../../dist/validator/map-partial.js';
import And from '../../../dist/validatable/and.js';
import ValidatorInterface from '@alirya/validator/simple.js';
import MessageMap from '../../../dist/message/message/record/map.js';
import RemoveUndefined from '../../../dist/omit-undefined.js';
import {TypeParameters} from '@alirya/type/validator/type.js';
import Instance from '@alirya/validator/validatable/validatable.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('explicit typed', function() {

    const validator = {
        name : TypeParameters('string'),
        address : TypeParameters('string'),
    };

    type TypeValidator = {
        name : ValidatorInterface<string, string, string>,
        address :ValidatorInterface<string, string, string>,
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

        const property = MapPartialParameters(validator, And, MessageMap);

        const validatable = property(value);

        const unknown : unknown = validatable.value;

        const string : Type = validatable.value;

    });

    it('auto', function() {

        const property = MapPartialParameters<
            globalThis.Record<keyof typeof validator, ValidatorInterface<string, string, string>>
            >(validator,
            And,
            (v)=>MessageMap(RemoveUndefined(v))
        );

        const validatable = property(value);

        const unknown : unknown = validatable.value;
        const string : Type = validatable.value;

    });

    it('direct', function() {

        const property = MapPartialParameters<TypeValidator>(validator, And, (v)=>MessageMap(RemoveUndefined(v)));

        const validatable = property(value);

        const unknown : unknown = validatable.value;
        const string : Type = validatable.value;

    });
});



