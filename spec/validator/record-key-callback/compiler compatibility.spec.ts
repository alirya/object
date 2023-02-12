import ValidatorInterface from '@alirya/validator/simple.js';
import Instance from '@alirya/validator/validatable/validatable.js';
import {RecordKeyCallbackParameters} from '../../../dist/validator/record-key-callback.js';
import {RecordKeyParameters} from '../../../dist/validator/validatable/record/record-key.js';
import And from '../../../dist/validatable/and.js';
import MessageMap from '../../../dist/message/message/record/map.js';
import ValidatorValidatable from '@alirya/validator/validatable/validatable.js';
import Validatable from '@alirya/validatable/validatable.js';
import {RecordKeyPartialParameters} from '../../../dist/validator/validatable/record/record-key-partial.js';
import {TypeParameters} from '@alirya/type/validator/type.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('compiler compatibility', function() {

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

        const property = RecordKeyCallbackParameters(validator, RecordKeyParameters, And, (v)=>MessageMap(v));

        const validatable = property(value);

        if(validatable.valid) {

            const string : Type = validatable.value;

        } else {

            const unknown : unknown = validatable.value;
        }

    });

    describe('explicit complete', function() {

        it('auto', function() {

            const property = RecordKeyCallbackParameters<TypeValidatorValue>(validator,
                (value, validators) => RecordKeyParameters(value, validators),
                (v)=>And(v),
                (v)=>MessageMap(<globalThis.Record<any, ValidatorValidatable>>v)
            );

            const validatable = property(value);

            const unknown : unknown = validatable.value;
            const record : Type = validatable.value;

        });

        it('direct', function() {

            const property = RecordKeyCallbackParameters<TypeValidatorValue>(validator,
                (value, validators) => RecordKeyParameters(value, validators),
                (v)=>And(<globalThis.Record<any, Validatable>>v),
                (v)=>MessageMap(<globalThis.Record<any, ValidatorValidatable>>v)
            );

            const validatable = property(value);

            const unknown : unknown = validatable.value;
            const record : Type = validatable.value;

        });
    });

    it('implicit partial', function() {

        const property = RecordKeyCallbackParameters(validator,
            (value, validators) =>
                <Record<PropertyKey, Instance<any, string>>>RecordKeyPartialParameters(value, validators),
            (v)=>And(<globalThis.Record<PropertyKey, Validatable>>v),
            MessageMap
        );

        const validatable = property(value);

        const unknown : unknown = validatable.value;
        const val : Type = validatable.value;

    });

    describe('explicit complete', function() {

        it('auto', function() {

            const property = RecordKeyCallbackParameters<TypeValidatorValue>(
                validator,
                (value, validators) =>
                    <Record<PropertyKey, Instance<any, string>>>RecordKeyPartialParameters(value, validators),
                (v)=>And(<globalThis.Record<any, ValidatorValidatable>>v),
                (v)=>MessageMap(<globalThis.Record<any, ValidatorValidatable>>v)
            );

            const validatable = property(value);

            const unknown : unknown = validatable.value;
            const string : Type = validatable.value;

        });

        it('direct', function() {

            const property = RecordKeyCallbackParameters<TypeValidatorValue>(
                validator,
                (value, validators) =>
                    <Record<PropertyKey, Instance<any, string>>>RecordKeyPartialParameters(value, validators),
                (v)=>And(<globalThis.Record<any, ValidatorValidatable>>v),
                (v)=>MessageMap(<globalThis.Record<any, ValidatorValidatable>>v)
            );

            const validatable = property(value);

            const unknown : unknown = validatable.value;
            const string : Type = validatable.value;

        });
    });
});
