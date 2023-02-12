import {MapCallbackParameters} from '../../../dist/validator/map-callback.js';
import {MapPartialParameters} from '../../../dist/validator/validatable/record/map-partial.js';
import {MapParameters} from '../../../dist/validator/validatable/record/map.js';
import And from '../../../dist/validatable/and.js';
import Validatable from '@alirya/validatable/validatable.js';
import ValidatorInterface from '@alirya/validator/simple.js';
import Message from '@alirya/message/message.js';
import MessageMap from '../../../dist/message/message/record/map.js';
import {TypeParameters} from '@alirya/type/validator/type.js';
import Instance from '@alirya/validator/validatable/validatable.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

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

it('implicit complete', function() {

    const property = MapCallbackParameters(validator, MapParameters, And, MessageMap);

    const validatable = property(value);

    const unknown : unknown = validatable.value;

    const string : Type = validatable.value;

});

describe('explicit complete', function() {

    it('auto', function() {

        const property = MapCallbackParameters<globalThis.Record<keyof typeof validator, ValidatorInterface<string, string, string>>>(validator,
            MapParameters,
            And,
            MessageMap
        );

        const validatable = property(value);

        const unknown : unknown = validatable.value;
        const record : Type = validatable.value;

    });

    it('direct', function() {

        const property = MapCallbackParameters<TypeValidator>(validator,
            MapParameters,
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        const validatable = property(value);

        const unknown : unknown = validatable.value;
        const record : Type = validatable.value;

    });
});

it('implicit partial', function() {

    const property = MapCallbackParameters(validator,
        (value, validators) =>
            <Record<PropertyKey, Instance<any, string>>>MapPartialParameters(value, validators),
        (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
        MessageMap
    );

    const validatable = property(value);

    const unknown : unknown = validatable.value;
    const val : Type = validatable.value;

});

describe('explicit complete', function() {

    it('auto', function() {

        const property = MapCallbackParameters<globalThis.Record<keyof typeof validator, ValidatorInterface<any, string, string>>>(
            validator,
            (value, validators) =>
                <Record<PropertyKey, Instance<any, string>>>MapPartialParameters(value, validators),
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        const validatable = property(value);

        const unknown : unknown = validatable.value;
        const string : Type = validatable.value;

    });

    it('direct', function() {

        const property = MapCallbackParameters<TypeValidator>(
            validator,
            (value, validators) =>
                <Record<PropertyKey, Instance<any, string>>>MapPartialParameters(value, validators),
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
            (v)=>MessageMap(<globalThis.Record<any, Message>>v)
        );

        const validatable = property(value);

        const unknown : unknown = validatable.value;
        const string : Type = validatable.value;

    });
});
