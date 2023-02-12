import ValidatorInterface from '@alirya/validator/simple.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import {RecordValueCallbackParameters} from '../../../dist/validator/record-value-callback.js';
import {RecordValueParameters} from '../../../dist/validator/validatable/record/record-value.js';
import And from '../../../dist/validatable/and.js';
import MessageMap from '../../../dist/message/message/record/map.js';
import Validatable from '@alirya/validatable/validatable.js';
import {RecordValuePartialParameters} from '../../../dist/validator/validatable/record/record-value-partial.js';
import Message from '@alirya/message/message.js';
import {TypeParameters} from '@alirya/type/validator/type.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

type TypeValidatorValue = ValidatorInterface<unknown, string, string>;

const validator = TypeParameters('string');

type Type = {
    name : string,
    address : string,
};

const value = {
    name : 'name',
    address : 'address',
};

it('implicit', function() {

    const property = RecordValueCallbackParameters(validator, RecordValueParameters, And, (v)=>MessageMap(v));

    const validatable = property(value);

    if(validatable.valid) {

        const string : Type = validatable.value;

    } else {

        const unknown : unknown = validatable.value;
    }

});

describe('explicit complete', function() {

    it('auto', function() {

        const property = RecordValueCallbackParameters<TypeValidatorValue>(validator,
            (value, validators) => RecordValueParameters(value, validators),
            (v)=>And(v),
            MessageMap
        );

        const validatable = property(value);

        const unknown : unknown = validatable.value;
        const record : Type = validatable.value;

    });

    it('direct', function() {

        const property = RecordValueCallbackParameters<TypeValidatorValue>(validator,
            (value, validators) => RecordValueParameters(value, validators),
            (v)=>And(<globalThis.Record<any, Validatable>>v),
            MessageMap
        );

        const validatable = property(value);

        const unknown : unknown = validatable.value;
        const record : Type = validatable.value;

    });
});

it('implicit partial', function() {

    const property = RecordValueCallbackParameters(validator,
        (value, validators) =>
            <Record<PropertyKey, Instance<any, string>>>RecordValuePartialParameters(value, validators),
        (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
        MessageMap
    );

    const validatable = property(value);

    const unknown : unknown = validatable.value;
    const val : Type = validatable.value;

});

describe('explicit complete', function() {

    it('auto', function() {

        const property = RecordValueCallbackParameters<TypeValidatorValue>(
            validator,
            (value, validators) =>
                <Record<PropertyKey, Instance<any, string>>>RecordValuePartialParameters(value, validators),
            (v)=>And(<globalThis.Record<any, Validatable>>v),
            MessageMap
        );

        const validatable = property(value);

        const unknown : unknown = validatable.value;
        const string : Type = validatable.value;

    });

    it('direct', function() {

        const property = RecordValueCallbackParameters<TypeValidatorValue>(
            validator,
            (value, validators) =>
                <Record<PropertyKey, Instance<any, string>>>RecordValuePartialParameters(value, validators),
            (v)=>And(<globalThis.Record<any, Validatable>>v),
            (v)=>MessageMap(<globalThis.Record<any, Message>>v)
        );

        const validatable = property(value);

        const unknown : unknown = validatable.value;
        const string : Type = validatable.value;

    });
});



