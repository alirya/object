import {MapCallbackParameters} from '../../../dist/validator/map-callback';
import {MapPartialParameters} from '../../../dist/validator/validatable/record/map-partial';
import {MapParameters} from '../../../dist/validator/validatable/record/map';
import And from '../../../dist/validatable/and';
import Validatable from '@alirya/validatable/validatable';
import ValidatorInterface from '@alirya/validator/simple';
import Message from '@alirya/message/message';
import MessageMap from '../../../dist/message/message/record/map';
import {TypeParameters} from '@alirya/type/validator/type';
import Instance from '@alirya/validator/validatable/validatable';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

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

it('implicit complete', function() {

    let property = MapCallbackParameters(validator, MapParameters, And, MessageMap);

    let validatable = property(value);

    let unknown : unknown = validatable.value;

    let string : Type = validatable.value;

});

describe('explicit complete', function() {

    it('auto', function() {

        let property = MapCallbackParameters<globalThis.Record<keyof typeof validator, ValidatorInterface<string, string, Instance<string, string>>>>(validator,
            MapParameters,
            And,
            MessageMap
        );

        let validatable = property(value);

        let unknown : unknown = validatable.value;
        let record : Type = validatable.value;

    });

    it('direct', function() {

        let property = MapCallbackParameters<TypeValidator>(validator,
            MapParameters,
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        let validatable = property(value);

        let unknown : unknown = validatable.value;
        let record : Type = validatable.value;

    });
});

it('implicit partial', function() {

    let property = MapCallbackParameters(validator,
        (value, validators) =>
            <Record<PropertyKey, Instance<any, string>>>MapPartialParameters(value, validators),
        (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
        MessageMap
    );

    let validatable = property(value);

    let unknown : unknown = validatable.value;
    let val : Type = validatable.value;

});

describe('explicit complete', function() {

    it('auto', function() {

        let property = MapCallbackParameters<globalThis.Record<keyof typeof validator, ValidatorInterface<any, string, Instance<any, string>>>>(
            validator,
            (value, validators) =>
                <Record<PropertyKey, Instance<any, string>>>MapPartialParameters(value, validators),
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        let validatable = property(value);

        let unknown : unknown = validatable.value;
        let string : Type = validatable.value;

    });

    it('direct', function() {

        let property = MapCallbackParameters<TypeValidator>(
            validator,
            (value, validators) =>
                <Record<PropertyKey, Instance<any, string>>>MapPartialParameters(value, validators),
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
            (v)=>MessageMap(<globalThis.Record<any, Message>>v)
        );

        let validatable = property(value);

        let unknown : unknown = validatable.value;
        let string : Type = validatable.value;

    });
});
