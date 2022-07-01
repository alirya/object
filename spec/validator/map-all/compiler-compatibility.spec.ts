import {MapAllParameters} from '../../../dist/validator/map-all';
import And from '../../../dist/validatable/and';
import Validatable from '@alirya/validatable/validatable';
import ValidatorInterface from '@alirya/validator/simple';
import MessageMap from '../../../dist/message/message/record/map';
import Instance from '@alirya/validator/validatable/validatable';
import Type from '@alirya/type/validator/type-parameters';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});



let validator = {
    name : Type('string'),
    address : Type('string'),
};

type TypeValidator = {
    name : ValidatorInterface<string, string, Instance<string, string>>,
    address :ValidatorInterface<string, string, Instance<string, string>>,
};

type Type = {
    name : string,
    address : string,
};

let value = {
    name : 'name',
    address : 'address',
};

describe('implicit complete', function() {

    let property = MapAllParameters(validator, And, MessageMap);

    let validatable = property(value);

    let unknown : unknown = validatable.value;

    let string : Type = validatable.value;
});

describe('explicit complete', function() {

    it('auto', function() {

        let property = MapAllParameters<globalThis.Record<keyof typeof validator, ValidatorInterface<string, string, Instance<string, string>>>>(
            validator,
            And,
            MessageMap
        );

        let validatable = property(value);

        let unknown : unknown = validatable.value;
        let record : Type = validatable.value;

    });

    it('direct', function() {

        let property = MapAllParameters<TypeValidator>(validator,
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
            MessageMap

        );

        let validatable = property(value);

        let unknown : unknown = validatable.value;
        let record : Type = validatable.value;

    });
});

