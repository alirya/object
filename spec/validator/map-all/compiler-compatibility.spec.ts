import {MapAllParameters} from '../../../dist/validator/map-all.js';
import And from '../../../dist/validatable/and.js';
import Validatable from '@alirya/validatable/validatable.js';
import ValidatorInterface from '@alirya/validator/simple.js';
import MessageMap from '../../../dist/message/message/record/map.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import {TypeParameters} from '@alirya/type/validator/type.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});



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

describe('implicit complete', function() {

    const property = MapAllParameters(validator, And, MessageMap);

    const validatable = property(value);

    const unknown : unknown = validatable.value;

    const string : Type = validatable.value;

    it('', ()=>expect(true).toBeTrue());
});

describe('explicit complete', function() {

    it('auto', function() {

        const property = MapAllParameters<globalThis.Record<keyof typeof validator, ValidatorInterface<string, string, string>>>(
            validator,
            And,
            MessageMap
        );

        const validatable = property(value);

        const unknown : unknown = validatable.value;
        const record : Type = validatable.value;

    });

    it('direct', function() {

        const property = MapAllParameters<TypeValidator>(validator,
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
            MessageMap

        );

        const validatable = property(value);

        const unknown : unknown = validatable.value;
        const record : Type = validatable.value;

    });
});

