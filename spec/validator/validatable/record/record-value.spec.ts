import Type from '@alirya/type/validator/type-parameters';
import Record from '../../../../dist/validator/validatable/record/record-value-parameters';
import Validator from '@alirya/validator/validator';

it('force console log', () => spyOn(console, 'log').and.callThrough());

describe('compiler compatibility', function() {

    it('explicit valid', function() {

        type ValueValidator = Validator<any, number>;

        type Value = {
            validator1 : number,
            validator2 : number,
        };

        let value : ValueValidator = Type('number');

        let record : Value = {
            validator1 : 10,
            validator2 : 10,
        };

        Record<Value, ValueValidator>(record, value);
    });

    it('implicit', function() {

        let value = Type('number');

        let record = {
            validator1 : 10,
            validator2 : 10,
        };

        Record(record, value);
    });

    it('auto', function() {

        let value = Type('number');

        let record = {
            validator1 : 10,
            validator2 : 10,
        };

        Record<typeof record, typeof value>(record, value);
    });
});
