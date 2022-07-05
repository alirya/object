import {TypeParameters} from '@alirya/type/validator/type';
import {RecordValueParameters} from '../../../../dist/validator/validatable/record/record-value';
import Validator from '@alirya/validator/validator';

it('force console log', () => spyOn(console, 'log').and.callThrough());

describe('compiler compatibility', function() {

    it('explicit valid', function() {

        type ValueValidator = Validator<any, number>;
        type KeyValidator = Validator<any, string>;
        type Value = {
            validator1 : number,
            validator2 : number,
        };

        let value : ValueValidator = TypeParameters('number');
        let key : KeyValidator = TypeParameters('string');

        let record : Value = {
            validator1 : 10,
            validator2 : 10,
        };

        RecordValueParameters(record, value);
    });

    it('implicit', function() {

        let value = TypeParameters('number');
        let key = TypeParameters('string');

        let record = {
            validator1 : 10,
            validator2 : 10,
        };

        RecordValueParameters(record, value);
    });

    it('auto', function() {

        let value = TypeParameters('number');
        let key = TypeParameters('string');

        let record = {
            validator1 : 10,
            validator2 : 10,
        };

        RecordValueParameters(record, value);
    });
});
