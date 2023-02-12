import {CallbackParameters} from '@alirya/validator/callback.js';
import {RecordKeyCallbackParameters} from '../../../dist/validator/record-key-callback.js';
import {RecordKeyParameters} from '../../../dist/validator/validatable/record/record-key.js';
import And from '../../../dist/validatable/and.js';
import MessageMap from '../../../dist/message/message/record/map.js';
import Or from '../../../dist/validatable/or.js';
import Infer from '@alirya/validator/validatable/infer-static.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

const validator = CallbackParameters<string, string>( function (value) {
    return  ['name', 'address'].includes(value);
}, function (value, valid){
    return value + ' ' + (valid ? 'valid' : 'true');
},);

const value = {
    name : 'string',
    age : 1,
    address : 'string',
};


it(`and validation`, () => {

const property = RecordKeyCallbackParameters<typeof validator, Record<PropertyKey, Infer<typeof validator>>>(validator, RecordKeyParameters, And, MessageMap);

    const and = property(value);

    expect<boolean>(and.valid).toBe(false);

    expect(and.validatables.name.valid).toBe(true);
    expect(and.validatables.name.message).toBe('name valid');

    expect(and.validatables.age.valid).toBe(false);
    expect(and.validatables.age.message).toBe('age true');

    expect(and.validatables.address.valid).toBe(true);
    expect(and.validatables.address.message).toBe('address valid');

    expect(and.value).toBe(value);
});


it(`or validation `, () => {

    const property = RecordKeyCallbackParameters<typeof validator, Record<PropertyKey, Infer<typeof validator>>>(validator, RecordKeyParameters, Or, MessageMap);

    const or = property(value);

    expect(or.valid).toBe(true);
    expect(or.value).toBe(value);

    expect(or.validatables.name.message).toBe('name valid');
    expect(or.validatables.name.valid).toBe(true);

    expect(or.validatables.age.message).toBe('age true');
    expect(or.validatables.age.valid).toBe(false);

    expect(or.validatables.address.message).toBe('address valid');
    expect(or.validatables.address.valid).toBe(true);

});
