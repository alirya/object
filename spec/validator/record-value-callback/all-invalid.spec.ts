import {TypeParameters} from '@alirya/type/validator/type';
import {RecordValueCallbackParameters} from '../../../dist/validator/record-value-callback';
import {RecordValueParameters} from '../../../dist/validator/validatable/record/record-value';
import And from '../../../dist/validatable/and';
import MessageMap from '../../../dist/message/message/record/map';
import Or from '../../../dist/validatable/or';
import Infer from '@alirya/validator/validatable/infer-static';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


describe('all invalid', function() {

    let validator = TypeParameters('string');

    let value = {
        name : true,
        age : true,
        address : true,
    };

    it(`and validation`, () => {

        let property = RecordValueCallbackParameters<typeof validator, Record<PropertyKey, Infer<typeof validator>>>
        (validator, RecordValueParameters, And, MessageMap);

        let and = property(value);

        expect<boolean>(and.valid).toBe(false);
        expect(and.value).toEqual(value);

        expect(and.validatables.name.valid).toBe(false);
        expect(typeof and.validatables.name.message).toBe('string');

        expect(and.validatables.age.valid).toBe(false);
        expect(typeof and.validatables.age.message).toBe('string');

        expect(and.validatables.address.valid).toBe(false);
        expect(typeof and.validatables.address.message).toBe('string');
    });

    it(`or validation `, () => {

        let property = RecordValueCallbackParameters<typeof validator, Record<PropertyKey, Infer<typeof validator>>>
        (validator, RecordValueParameters, Or, MessageMap);

        let or = property(value);
        expect<boolean>(or.valid).toBe(false);
        expect(or.value).toEqual(value);

        expect(typeof or.validatables.name.message).toBe('string');
        expect(or.validatables.name.valid).toBe(false);

        expect(typeof or.validatables.age.message).toBe('string');
        expect(or.validatables.age.valid).toBe(false);

        expect(typeof or.validatables.address.message).toBe('string');
        expect(or.validatables.address.valid).toBe(false);
    });
});
