import {TypeParameters} from '@alirya/type/validator/type.js';
import {RecordValueCallbackParameters} from '../../../dist/validator/record-value-callback.js';
import {RecordValueParameters} from '../../../dist/validator/validatable/record/record-value.js';
import And from '../../../dist/validatable/and.js';
import MessageMap from '../../../dist/message/message/record/map.js';
import Or from '../../../dist/validatable/or.js';
import Infer from '@alirya/validator/validatable/infer-static.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});


describe('all invalid', function() {

    const validator = TypeParameters('string');

    const value = {
        name : true,
        age : true,
        address : true,
    };

    it(`and validation`, () => {

        const property = RecordValueCallbackParameters<typeof validator, Record<PropertyKey, Infer<typeof validator>>>
        (validator, RecordValueParameters, And, MessageMap);

        const and = property(value);

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

        const property = RecordValueCallbackParameters<typeof validator, Record<PropertyKey, Infer<typeof validator>>>
        (validator, RecordValueParameters, Or, MessageMap);

        const or = property(value);
        expect<boolean>(or.valid).toBe(false);
        expect(or.value).toEqual(value);

        expect(typeof or.validatables.name.message).toBe('string');
        expect(or.validatables.name.valid).toBe(false);

        expect(typeof or.validatables.age.message).toBe('string');
        expect(or.validatables.age.valid).toBe(false);

        expect(typeof or.validatables.address.message).toBe('string');
        expect(or.validatables.address.valid).toBe(false);
    });

    it(`invalid type`, () => {

        const property = RecordValueCallbackParameters<typeof validator, Record<PropertyKey, Infer<typeof validator>>>
        (validator, RecordValueParameters, And, MessageMap);

        const and = property(null as any);

        expect<boolean>(and.valid).toBe(false);
        expect(and.value).toEqual(null);

    });
});

