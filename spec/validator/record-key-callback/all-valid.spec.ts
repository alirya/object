import {TypeParameters} from '@axiona/type/validator/type.js';
import {RecordKeyCallbackParameters} from '../../../dist/validator/record-key-callback.js';
import {RecordKeyParameters} from '../../../dist/validator/validatable/record/record-key.js';
import And from '../../../dist/validatable/and.js';
import MessageMap from '../../../dist/message/message/record/map.js';
import Or from '../../../dist/validatable/or.js';
import Infer from '@axiona/validator/validatable/infer-static.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

const validator = TypeParameters('string');

const value = {
    name : 'string',
    address : 'string',
    user : 'string',
};

it(`and validation`, () => {

    const property = RecordKeyCallbackParameters<typeof validator, Record<PropertyKey, Infer<typeof validator>>>(validator, RecordKeyParameters, And, MessageMap);

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


    const property = RecordKeyCallbackParameters<typeof validator, Record<PropertyKey, Infer<typeof validator>>>(validator, RecordKeyParameters, Or, MessageMap);

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
