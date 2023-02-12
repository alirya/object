import {TypeParameters} from '@alirya/type/validator/type.js';
import {RecordValueParameters} from '../../../../dist/validator/validatable/record/record-value.js';
import Validator from '@alirya/validator/validator.js';

it('force console log', () => spyOn(console, 'log').and.callThrough());

describe('compiler compatibility', function() {

    it('explicit valid', function() {

        type ValueValidator = Validator<any, number>;

        type Value = {
            validator1 : number,
            validator2 : number,
        };

        const value : ValueValidator = TypeParameters('number');

        const record : Value = {
            validator1 : 10,
            validator2 : 10,
        };

        RecordValueParameters<Value, ValueValidator>(record, value);
    });

    it('implicit', function() {

        const value = TypeParameters('number');

        const record = {
            validator1 : 10,
            validator2 : 10,
        };

        RecordValueParameters(record, value);
    });

    it('auto', function() {

        const value = TypeParameters('number');

        const record = {
            validator1 : 10,
            validator2 : 10,
        };

        RecordValueParameters<typeof record, typeof value>(record, value);
    });
});
