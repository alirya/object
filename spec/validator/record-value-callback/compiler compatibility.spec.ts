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

type TypeValidatorValue = ValidatorInterface<unknown, string, Instance<unknown, string>>;

let validator = TypeParameters('string');

type Type = {
    name : string,
    address : string,
};

let value = {
    name : 'name',
    address : 'address',
};

it('implicit', function() {

    let property = RecordValueCallbackParameters(validator, RecordValueParameters, And, (v)=>MessageMap(v));

    let validatable = property(value);

    if(validatable.valid) {

        let string : Type = validatable.value;

    } else {

        let unknown : unknown = validatable.value;
    }

});

describe('explicit complete', function() {

    it('auto', function() {

        let property = RecordValueCallbackParameters<TypeValidatorValue>(validator,
            (value, validators) => RecordValueParameters(value, validators),
            (v)=>And(v),
            MessageMap
        );

        let validatable = property(value);

        let unknown : unknown = validatable.value;
        let record : Type = validatable.value;

    });

    it('direct', function() {

        let property = RecordValueCallbackParameters<TypeValidatorValue>(validator,
            (value, validators) => RecordValueParameters(value, validators),
            (v)=>And(<globalThis.Record<any, Validatable>>v),
            MessageMap
        );

        let validatable = property(value);

        let unknown : unknown = validatable.value;
        let record : Type = validatable.value;

    });
});

it('implicit partial', function() {

    let property = RecordValueCallbackParameters(validator,
        (value, validators) =>
            <Record<PropertyKey, Instance<any, string>>>RecordValuePartialParameters(value, validators),
        (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
        MessageMap
    );

    let validatable = property(value);

    let unknown : unknown = validatable.value;
    let val : Type = validatable.value;

});

describe('explicit complete', function() {

    it('auto', function() {

        let property = RecordValueCallbackParameters<TypeValidatorValue>(
            validator,
            (value, validators) =>
                <Record<PropertyKey, Instance<any, string>>>RecordValuePartialParameters(value, validators),
            (v)=>And(<globalThis.Record<any, Validatable>>v),
            MessageMap
        );

        let validatable = property(value);

        let unknown : unknown = validatable.value;
        let string : Type = validatable.value;

    });

    it('direct', function() {

        let property = RecordValueCallbackParameters<TypeValidatorValue>(
            validator,
            (value, validators) =>
                <Record<PropertyKey, Instance<any, string>>>RecordValuePartialParameters(value, validators),
            (v)=>And(<globalThis.Record<any, Validatable>>v),
            (v)=>MessageMap(<globalThis.Record<any, Message>>v)
        );

        let validatable = property(value);

        let unknown : unknown = validatable.value;
        let string : Type = validatable.value;

    });
});



