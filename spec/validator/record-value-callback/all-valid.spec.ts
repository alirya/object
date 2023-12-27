import {TypeParameters} from '@axiona/type/validator/type.js';
import {RecordValueCallbackParameters} from '../../../dist/validator/record-value-callback.js';
import {RecordValueParameters} from '../../../dist/validator/validatable/record/record-value.js';
import And from '../../../dist/validatable/and.js';
import MessageMap from '../../../dist/message/message/record/map.js';
import Or from '../../../dist/validatable/or.js';
import Infer from '@axiona/validator/validatable/infer-static.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('flat', function() {

    const validator = TypeParameters('string');

    const value = {
        name : 'string',
        address : 'string',
        user : 'string',
    };

    it(`and validation`, () => {

        const property = RecordValueCallbackParameters<typeof validator, Record<PropertyKey, Infer<typeof validator>>>(validator, RecordValueParameters, And, MessageMap);

        const validatable = property(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(value);

        expect(validatable.validatables.name.valid).toBe(true);
        expect(typeof validatable.validatables.name.message).toBe('string');

        expect(validatable.validatables.address.valid).toBe(true);
        expect(typeof validatable.validatables.address.message).toBe('string');

        expect(validatable.validatables.user.valid).toBe(true);
        expect(typeof validatable.validatables.user.message).toBe('string');
    });


    it(`or validation`, () => {

        const property = RecordValueCallbackParameters<typeof validator, Record<PropertyKey, Infer<typeof validator>>>(validator, RecordValueParameters, Or, MessageMap);

        const validatable = property(value);

        expect(validatable.valid).toBe(true);
        expect(validatable.value).toBe(value);

        expect(validatable.validatables.name.valid).toBe(true);
        expect(typeof validatable.validatables.name.message).toBe('string');

        expect(validatable.validatables.address.valid).toBe(true);
        expect(typeof validatable.validatables.address.message).toBe('string');

        expect(validatable.validatables.user.valid).toBe(true);
        expect(typeof validatable.validatables.user.message).toBe('string');
    });
});
