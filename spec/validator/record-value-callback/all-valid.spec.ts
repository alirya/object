import Type from '@alirya/type/validator/type-parameters';
import {RecordValueCallbackParameters} from '../../../dist/validator/record-value-callback';
import {RecordValueParameters} from '../../../dist/validator/validatable/record/record-value';
import And from '../../../dist/validatable/and';
import MessageMap from '../../../dist/message/message/record/map';
import Or from '../../../dist/validatable/or';
import Infer from '@alirya/validator/validatable/infer-static';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('flat', function() {

    let validator = Type('string');

    let value = {
        name : 'string',
        address : 'string',
        user : 'string',
    };

    it(`and validation`, () => {

        let property = RecordValueCallbackParameters<typeof validator, Record<PropertyKey, Infer<typeof validator>>>(validator, RecordValueParameters, And, MessageMap);

        let validatable = property(value);

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

        let property = RecordValueCallbackParameters<typeof validator, Record<PropertyKey, Infer<typeof validator>>>(validator, RecordValueParameters, Or, MessageMap);

        let validatable = property(value);

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
