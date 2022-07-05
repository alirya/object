import ValidatorInterface from '@alirya/validator/simple';
import Instance from '@alirya/validator/validatable/validatable';
import {RecordValueCallbackParameters} from '../../../dist/validator/record-value-callback';
import {RecordValueParameters} from '../../../dist/validator/validatable/record/record-value';
import And from '../../../dist/validatable/and';
import MessageMap from '../../../dist/message/message/record/map';
import Validatable from '@alirya/validatable/validatable';
import {RecordValuePartialParameters} from '../../../dist/validator/validatable/record/record-value-partial';
import Message from '@alirya/message/message';
import {TypeParameters} from '@alirya/type/validator/type';

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



